import formRegex from "@/lib/formRegex";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

type formDataType = { fname: string, email: string, price: string, desc: string }

async function sendDiscordMessage(formData: formDataType) {
  const webhookURL = `https://discord.com/api/webhooks/1095993912285478942/4fDFFyCYgdkk2ZtzbadfKRy-1fFm_oMrE0NywC1TvWdfLC_94nMUitOPnDW-GGdpA440`;
  let resData = null;
  let errorMsg: null | string = null;

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [
        {
          avatar_url: "https://i.imgur.com/4M34hi2.png",
          // author: {
          //   name: formData.fname,
          //   url: `https://mail.google.com/mail/u/1/#inbox?compose=new`,
          // },
          title: `${formData.fname}`,
          url: `https://mail.google.com/mail/u/1/#inbox?compose=new`,
          // description: formData.desc,
          color: 15258703,
          fields: [
            {
              name: "Email ID",
              value: formData.email,
              inline: true,
            },
            {
              name: "Budget",
              value: formData.price + " $",
              inline: true,
            },
            {
              name: "Description",
              value: formData.desc,
              inline: false,
            }
          ]
        }
      ]
    }),
  })
    .then(res => res.json())
    .then(data => {
      resData = data;
      console.log(data);
    })
    .catch(error => {
      errorMsg = error;
    });

  return resData;
}

function validateForm(formData: formDataType) {
  let result = { valid: true, error: "" }

  const fnameRegex = new RegExp(formRegex.fname.source);
  const emailRegex = new RegExp(formRegex.email.source);
  const priceRegex = new RegExp(formRegex.price.source);
  const descRegex = new RegExp(formRegex.desc.source);

  if (!fnameRegex.test(formData.fname)) {
    result.valid = false;
    result.error = "Name can only contain letters and spaces"
  }
  else if (!emailRegex.test(formData.email)) {
    result.valid = false;
    result.error = "Please enter a valid email address"
  }
  else if (!priceRegex.test(formData.price)) {
    result.valid = false;
    result.error = "Price should be a number with two decimal places"
  }
  else if (!descRegex.test(formData.desc)) {
    result.valid = false;
    result.error = "Description should be between 10 and 100 characters"
  }

  return result;
}


export async function POST(request: NextRequest) {

  const { ...formData } = await request.json();
  console.log(formData);

  const validity = validateForm(formData);

  console.log(validity);

  if (!validity.valid) {
    return new NextResponse(JSON.stringify({ message: validity.error }), { status: 400 })
  }

  sendDiscordMessage(formData)

  return NextResponse.json({
    message: "Sent Successfully",
  }, { status: 200 })
}

