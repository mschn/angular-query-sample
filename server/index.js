import Fastify from "fastify";
import { animals } from "./animals.js";

const fastify = Fastify({
  logger: true,
});

fastify.get("/animals", async function handler(request, reply) {
  return animals;
});

fastify.post("/animals", async function handler(request, reply) {
  const { body } = request;
  const nextId = animals.length + 1;
  animals.push({
    id: nextId,
    name: body.name,
    weight: body.weight,
    type: body.type,
  });
  return animals;
});

fastify.get("/animals/:id", async function handler(request, reply) {
  const animal = animals.find((animal) => animal.id === request.params.id);
  if (animal) {
    return animal;
  } else {
    reply.code(404).type("application/json").send({ error: "Not found" });
  }
});

fastify.addHook("preHandler", (req, res, done) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");

  const isPreflight = /options/i.test(req.method);
  if (isPreflight) {
    return res.send();
  }
  done();
});

const { ADDRESS = "localhost", PORT = "3000" } = process.env;
try {
  await fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10) });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
