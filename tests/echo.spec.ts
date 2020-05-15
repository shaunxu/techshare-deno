import { assertEquals } from "https://deno.land/std@0.50.0/testing/asserts.ts";
import { EchoService } from "../src/echo_service.ts";

Deno.test("echo", () => {

    const service = new EchoService();
    const input = "Shaun Xu";
    const expect_output = `>> ${input} -- Powered by Deno 🦕`;

    const actual_output = service.echo(input);

    assertEquals(actual_output, expect_output);
});
