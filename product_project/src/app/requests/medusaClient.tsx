import Medusa from "@medusajs/medusa-js"

const medusa = new Medusa({
    maxRetries: 3,
    baseUrl: "http://localhost:9000",
  })

export {medusa}