/** Types generated for queries found in "src/routes/localCommitment/sql/getCompletionRatio.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetCompletionRatio' parameters type */
export type IGetCompletionRatioParams = void;

/** 'GetCompletionRatio' return type */
export interface IGetCompletionRatioResult {
  category: number;
  id: string;
  total: string | null;
}

/** 'GetCompletionRatio' query type */
export interface IGetCompletionRatioQuery {
  params: IGetCompletionRatioParams;
  result: IGetCompletionRatioResult;
}

const getCompletionRatioIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT commitment.id,\n  finance.category,\n  sum(gov) + sum(sido) + sum(sigungu) + sum(etc) AS total\nFROM commitment\n  JOIN election ON election.id = commitment.election_id\n  AND election.category = $1\n  AND (\n    $2::int [] IS NULL\n    OR election.district = ANY($2)\n  )\n  JOIN finance ON finance.commitment_id = commitment.id\n  AND finance.basis_date = CASE\n    WHEN $3::timestamptz IS NULL THEN (\n      SELECT basis_date\n      FROM finance\n      ORDER BY basis_date DESC\n      LIMIT 1\n    )\n    ELSE $3\n  END\n  AND (\n    $4::int [] IS NULL\n    OR finance.fiscal_year = ANY($4)\n  )\nGROUP BY commitment.id,\n  finance.category\nORDER BY commitment.id"};

/**
 * Query generated from SQL:
 * ```
 * SELECT commitment.id,
 *   finance.category,
 *   sum(gov) + sum(sido) + sum(sigungu) + sum(etc) AS total
 * FROM commitment
 *   JOIN election ON election.id = commitment.election_id
 *   AND election.category = $1
 *   AND (
 *     $2::int [] IS NULL
 *     OR election.district = ANY($2)
 *   )
 *   JOIN finance ON finance.commitment_id = commitment.id
 *   AND finance.basis_date = CASE
 *     WHEN $3::timestamptz IS NULL THEN (
 *       SELECT basis_date
 *       FROM finance
 *       ORDER BY basis_date DESC
 *       LIMIT 1
 *     )
 *     ELSE $3
 *   END
 *   AND (
 *     $4::int [] IS NULL
 *     OR finance.fiscal_year = ANY($4)
 *   )
 * GROUP BY commitment.id,
 *   finance.category
 * ORDER BY commitment.id
 * ```
 */
export const getCompletionRatio = new PreparedQuery<IGetCompletionRatioParams,IGetCompletionRatioResult>(getCompletionRatioIR);


