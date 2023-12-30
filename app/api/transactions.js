import { PublicKey } from "@solana/web3.js";
import { createWriteOrderInstruction, PizzaOrder } from "@/src/util/order";
import { CONNECTION, MERCHANT_WALLET } from "@/src/util/const";
import { createTransfer } from "@solana/pay";
import BigNumber from "bignumber.js";

function getFromPayload(req, payload, field) {
  function parseError() {
    throw new Error(`${payload} parse error: missing ${field}`);
  }
  let value;
  if (payload === "Query") {
    if (!(field in req.query)) parseError();
    value = req.query[field];
  }
  if (payload === "Body") {
    if (!req.body || !(field in req.body)) parseError();
    value = req.body[field];
  }
  if (value === undefined || value.length === 0) parseError();
  return typeof value === "string" ? value : value[0];
}

export default function handler(req, res) {
  if (req.method === "GET") {
    return get(req, res);
  }

  if (req.method === "POST") {
    return post(req, res);
  }
}

const get = async (req, res) => {
  const label = "Solami Pizza";
  const icon =
    "https://media.discordapp.net/attachments/964525722301501477/978683590743302184/sol-logo1.png";

  res.status(200).json({
    label,
    icon,
  });
};

const post = async (req, res) => {
  const message = "Thanks for buying a Solami pizza!";

  const accountField = getFromPayload(req, "Body", "account");
  const referenceField = getFromPayload(req, "Query", "reference");
  const amountField = getFromPayload(req, "Query", "amount");
  const token = getFromPayload(req, "Query", "token");
  const order = Number.parseInt(getFromPayload(req, "Query", "order"));
  const pepperoni = Number.parseInt(getFromPayload(req, "Query", "pepperoni"));
  const mushrooms = Number.parseInt(getFromPayload(req, "Query", "mushrooms"));
  const olives = Number.parseInt(getFromPayload(req, "Query", "olives"));

  const sender = new PublicKey(accountField);
  const reference = new PublicKey(referenceField);
  const amount = Number.parseInt(amountField);

  const transferConfig = {
    recipient: MERCHANT_WALLET,
    amount: new BigNumber(amount),
    splToken: token === "SOL" ? undefined : new PublicKey(token),
    reference,
    memo: message,
  };

  const transaction = await createTransfer(CONNECTION, sender, transferConfig);
  transaction.add(
    await createWriteOrderInstruction(
      sender,
      new PizzaOrder({ order, pepperoni, mushrooms, olives }),
    ),
  );

  // Serialize and return the unsigned transaction.
  const serializedTransaction = transaction.serialize({
    verifySignatures: false,
    requireAllSignatures: false,
  });

  const base64Transaction = serializedTransaction.toString("base64");

  res.status(200).send({ transaction: base64Transaction, message });
};
