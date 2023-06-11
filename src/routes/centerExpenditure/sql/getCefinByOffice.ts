/** Types generated for queries found in "src/routes/centerExpenditure/sql/getCefinByOffice.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetCefinByOffice' parameters type */
export type IGetCefinByOfficeParams = void;

/** 'GetCefinByOffice' return type */
export interface IGetCefinByOfficeResult {
  sactv_nm: string;
  y_yy_dfn_medi_kcur_amt: string | null;
  y_yy_medi_kcur_amt: string | null;
}

/** 'GetCefinByOffice' query type */
export interface IGetCefinByOfficeQuery {
  params: IGetCefinByOfficeParams;
  result: IGetCefinByOfficeResult;
}

const getCefinByOfficeIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT SACTV_NM,\n  sum(Y_YY_MEDI_KCUR_AMT) AS Y_YY_MEDI_KCUR_AMT,\n  sum(Y_YY_DFN_MEDI_KCUR_AMT) AS Y_YY_DFN_MEDI_KCUR_AMT\nFROM center_expenditure\nWHERE OFFC_NM = ANY ($1)\n  AND FSCL_YY BETWEEN $2 AND $3\n  AND (\n    $4::boolean IS NULL\n    OR CASE\n      WHEN $4 THEN FLD_NM = ANY($5)\n      ELSE SECT_NM = ANY($5)\n    END\n  )\nGROUP BY SACTV_NM\nORDER BY Y_YY_DFN_MEDI_KCUR_AMT DESC\nLIMIT $6"};

/**
 * Query generated from SQL:
 * ```
 * SELECT SACTV_NM,
 *   sum(Y_YY_MEDI_KCUR_AMT) AS Y_YY_MEDI_KCUR_AMT,
 *   sum(Y_YY_DFN_MEDI_KCUR_AMT) AS Y_YY_DFN_MEDI_KCUR_AMT
 * FROM center_expenditure
 * WHERE OFFC_NM = ANY ($1)
 *   AND FSCL_YY BETWEEN $2 AND $3
 *   AND (
 *     $4::boolean IS NULL
 *     OR CASE
 *       WHEN $4 THEN FLD_NM = ANY($5)
 *       ELSE SECT_NM = ANY($5)
 *     END
 *   )
 * GROUP BY SACTV_NM
 * ORDER BY Y_YY_DFN_MEDI_KCUR_AMT DESC
 * LIMIT $6
 * ```
 */
export const getCefinByOffice = new PreparedQuery<IGetCefinByOfficeParams,IGetCefinByOfficeResult>(getCefinByOfficeIR);


