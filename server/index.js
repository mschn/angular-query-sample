import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

const animals = [
  { id: "1", name: "Cat" },
  { id: "2", name: "Dog" },
  { id: "3", name: "Hamster" },
  { id: "4", name: "Wolf" },
];

fastify.get("/animals", async function handler(request, reply) {
  return animals;
});

fastify.get("/animal/:id", async function handler(request, reply) {
  const animal = animals.find((animal) => animal.id === request.params.id);
  if (animal) {
    return animal;
  } else {
    reply.code(404).type("application/json").send({ error: "Not found" });
  }
});

fastify.addHook("preHandler", (req, res, done) => {
  res.header("Access-Control-Allow-Origin", "*");
  done();
});

const { ADDRESS = "localhost", PORT = "3000" } = process.env;
try {
  await fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10) });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
