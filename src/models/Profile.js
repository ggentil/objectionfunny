import { Model } from "objection";

class Profile extends Model {
  static get tableName() {
    return 'wallets';
  }

  id: string;

  type: string;

  name: string;

  userId: string;

  balance: string;

  systemFeeRate: string;

  systemFeeType: string;

  systemMinCharge: string;

  systemMaxCharge: string;

  systemMinPayment: string;

  systemMaxPayment: string;

  systemMaxBalance: string;

  systemMinWithdrawal: string;

  systemMaxWithdrawal: string;

  systemDailyAmountLimit: string;

  systemWeeklyAmountLimit: string;

  systemMonthlyAmountLimit: string;

  systemDailyTxCountLimit: string;

  systemWeeklyTxCountLimit: string;

  systemMonthlyTxCountLimit: string;

  status: string;

  claimedBy: ?string;

  createdAt: string;

  updatedAt: string;

  pendingFee: string;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'userId'],
      properties: {
        id: { type: 'string' },
        type: { type: 'string' },
        name: { type: 'string' },
        userId: { type: 'string' },
        status: { type: 'string' },
        balance: { type: 'string' },
        systemFeeRate: { type: 'string' },
        systemFeeType: { type: 'string' },
        systemMinCharge: { type: 'string' },
        systemMaxCharge: { type: 'string' },
        systemMinPayment: { type: 'string' },
        systemMaxPayment: { type: 'string' },
        systemMaxBalance: { type: 'string' },
        claimedBy: { type: ['string', 'null'] },
        systemMinWithdrawal: { type: 'string' },
        systemMaxWithdrawal: { type: 'string' },
        systemDailyAmountLimit: { type: 'string' },
        systemWeeklyAmountLimit: { type: 'string' },
        systemDailyTxCountLimit: { type: 'string' },
        systemMonthlyAmountLimit: { type: 'string' },
        systemWeeklyTxCountLimit: { type: 'string' },
        systemMonthlyTxCountLimit: { type: 'string' },
        pendingFee: { type: 'string' },
      },
    };
  }
}

module.exports = Profile;
