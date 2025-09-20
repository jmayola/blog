import { Form } from "@inertiajs/react";
import Layout from "../layouts/blog-layout"
type PageProps = {
  resultado?: number;
};

export default function Suma(res: PageProps) {
  return (
    <Layout>
    <div>
      <h1>Haz una suma</h1>
      <Form action="/suma" method="post">
        <input
          type="number"
          name="num1"
          placeholder="Numero 1"
        />
        <input
          type="number"
          name="num2"
          placeholder="Numero 2"
        />
        <button type="submit">Send</button>
      </Form>

      {typeof res.resultado !== "undefined" && (
        <h3>Resultado: {res.resultado}</h3>
      )}
    </div>
    </Layout>
  );
}
