import { connectMongoDB } from "../../../lib/mongodb";

import userModal from "../../../models/User";
import offerModel from "../../../models/Offer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { name, email, phone, subject, tmessage } = await req.json();

    await connectMongoDB();

    let user = await userModal
      .find({ email })
      .then((r) => r)
      .catch((err) => err);

    if (user && user.length == 0) {
      return Response.json(
        { message: "Email not register or not found" },
        { status: 401 }
      );
    } else {
      await offerModel.create({ name, email, phone, subject, tmessage });
      return Response.json(
        { message: "Message Send Successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
