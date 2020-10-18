// main
export const Endpoint = {
  WEB: {
    HOME: "/",
  },
  API: {
    TODOS: "/api/todos",
    TODOS_ID: "/api/todos/:id",
  },
  SAMPLE: {
    PLUGIN1: "/sample/plugin1",
    PLUGIN1_2: "/sample/plugin1-2",
    PLUGIN1_ID: "/sample/plugin1/:id",
    CONTROLLER1: "/sample/controller1",
  },
} as const
