/* @name getCefinRatio */
SELECT CASE
    WHEN $3 THEN FLD_NM
    ELSE SECT_NM
  END,
  -- SUM(Y_PREY_FIRST_KCUR_AMT) AS Y_PREY_FIRST_KCUR_AMT,
  -- SUM(Y_PREY_FNL_FRC_AMT) AS Y_PREY_FNL_FRC_AMT,
  -- SUM(Y_YY_MEDI_KCUR_AMT) AS Y_YY_MEDI_KCUR_AMT,
  SUM(Y_YY_DFN_MEDI_KCUR_AMT) AS Y_YY_DFN_MEDI_KCUR_AMT
FROM center_expenditure
WHERE FSCL_YY BETWEEN $1 AND $2
GROUP BY CASE
    WHEN $3 THEN FLD_NM
    ELSE SECT_NM
  END;