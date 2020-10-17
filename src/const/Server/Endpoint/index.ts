// main
export const Endpoint = {
  ROOT: "/",
  API: {
    TODOS: "/api/todos",
  },
  TEST: {
    PLUGIN1: "/test/plugin1",
    PLUGIN1_2: "/test/plugin1-2",
    PLUGIN1_ID: "/test/plugin1/:id",
    CONTROLLER1: "/test/controller1",
  },
} as const
