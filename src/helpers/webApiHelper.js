import * as queryString from "query-string";

function getFetchUrl(args) {
  return (
    args.endpoint + (args.query ? `?${queryString.stringify(args.query)}` : "")
  );
}

function getFetchArgs(args) {
  const headers = {};
  if (!args.attachment) {
    headers["Content-Type"] = "application/json";
    headers.Accept = "application/json";
  }
  const token = localStorage.getItem("token");
  if (token) {
    headers.Token = `${token}`;
  }
  let body;
  if (args.attachment) {
    if (args.type === "GET") {
      throw new Error("GET request does not support attachments.");
    }
    const formData = new FormData();
    formData.append("name", args.attachment.name);
    formData.append("email", args.attachment.email);
    formData.append("phone", args.attachment.phone);
    formData.append("position_id", args.attachment.position_id);
    formData.append("photo", args.attachment.photo);
    body = formData;
  } else if (args.request) {
    if (args.type === "GET") {
      throw new Error("GET request does not support request body.");
    }
    body = JSON.stringify(args.request);
  }
  return {
    method: args.type,
    headers,
    signal: args.ct,
    ...(args.request === "GET" ? {} : { body })
  };
}

export async function throwIfResponseFailed(res) {
  if (!res.ok) {
    let parsedException = "Something went wrong with request!";
    try {
      parsedException = await res.json();
    } catch (err) {
      //
    }
    throw parsedException;
  }
}

export default async function callWebApi(args) {
  try {
    const res = await fetch(getFetchUrl(args), getFetchArgs(args));
    await throwIfResponseFailed(res);
    return res;
  } catch (err) {
    throw err;
  }
}
