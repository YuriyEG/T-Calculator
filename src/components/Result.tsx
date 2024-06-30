import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Typography } from "@mui/material";

const ResultBox = styled.div`
  color: black;
`;

const Discount = styled(Typography)`
  color: green;
  font-weight: bold;
`;

const Result: React.FC = () => {
  const { tariff, currency, period, rates } = useSelector(
    (state: RootState) => state.calculator
  );
  const rate = rates[currency];

  const tariffs = {
    standard: { monthly: 100, yearly: 1000 },
    advanced: { monthly: 150, yearly: 1400 },
  };

  const selectedTariff = tariffs[tariff];
  const price =
    period === "monthly"
      ? selectedTariff.monthly * rate
      : selectedTariff.yearly * rate;
  const discount =
    period === "yearly"
      ? (selectedTariff.monthly * 12 - selectedTariff.yearly) * rate
      : 0;

  return (
    <ResultBox>
      <Typography variant="h6">
        Сумма к оплате: {price.toFixed(2)} {currency}
      </Typography>
      {discount > 0 && (
        <Discount variant="h6">
          Ваша скидка: {discount.toFixed(2)} {currency}
        </Discount>
      )}
    </ResultBox>
  );
};

export default Result;
