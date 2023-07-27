const express = require("express");
const app = express();
const cors = require("cors");
const { client } = require("./db");
app.use(express.json());
app.use(cors());
const getData = async () => {
  try {
    const conn = await client.connect();
    const result = await conn.query("SELECT * FROM contact_messages ;");
    return result.rows;
  } catch (err) {
    console.log(err.message);
  }
};

const postData = async (data) => {
  try {
    const conn = await client.connect();
    const result =
      await conn.query(` INSERT INTO contact_messages (name, email, subject_name, message)
       VALUES ('${data.name}', '${data.email}', '${data.subject}', '${data.message}') RETURNING *;
       `);
    return result.rows[0];
  } catch (err) {
    console.log(err.message);
  }
};

app.get("/", (req, res) => {
  res.json({ message: "hello from server XD" });
});

app.get("/messages", async (req, res) => {
  const messages = await getData();
  res.json({ messages: messages });
});

app.post("/messages", async (req, res) => {
  const message = await postData(req.body);
  res.json(message);
});

app.listen(3000, () => {
  console.log("server listening in port 3000 >>>");
});
