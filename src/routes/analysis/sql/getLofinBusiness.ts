/** Types generated for queries found in "src/routes/analysis/sql/getLofinBusiness.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetLofinBusiness' parameters type */
export type IGetLofinBusinessParams = void;

/** 'GetLofinBusiness' return type */
export interface IGetLofinBusinessResult {
  detail_bsns_nm: string;
  excut_de: Date | null;
  realm_code: number;
  sect_code: number;
  sfrnd_code: number;
}

/** 'GetLofinBusiness' query type */
export interface IGetLofinBusinessQuery {
  params: IGetLofinBusinessParams;
  result: IGetLofinBusinessResult;
}

const getLofinBusinessIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT sfrnd_code,\n  detail_bsns_nm,\n  excut_de,\n  realm_code,\n  sect_code\nFROM local_expenditure\nWHERE id = $1"};

/**
 * Query generated from SQL:
 * ```
 * SELECT sfrnd_code,
 *   detail_bsns_nm,
 *   excut_de,
 *   realm_code,
 *   sect_code
 * FROM local_expenditure
 * WHERE id = $1
 * ```
 */
export const getLofinBusiness = new PreparedQuery<IGetLofinBusinessParams,IGetLofinBusinessResult>(getLofinBusinessIR);


