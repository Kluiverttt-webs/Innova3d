import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the Innova 3D landing page with working contact paths", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>Innova 3D \| Soluciones de impresión 3D<\/title>/i);
  assert.match(html, /Convertimos tus ideas/);
  assert.match(html, /en soluciones 3D/);
  assert.match(html, /href="\/servicios"/);
  assert.match(html, /href="\/quienes-somos"/);
  assert.match(html, /href="\/contacto"/);
  assert.match(html, /https:\/\/wa\.me\/593995189882\?text=/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/i);
});

test("renders and serves the vertical process video", async () => {
  const response = await render("/quienes-somos");
  assert.equal(response.status, 200);

  const html = await response.text();
  const videoTag = html.match(/<video[^>]*>/i)?.[0] ?? "";

  assert.match(videoTag, /src="\/videos\/innova-3d-proceso\.mp4"/i);
  assert.match(videoTag, /\bautoPlay=""/i);
  assert.match(videoTag, /\bmuted=""/i);
  assert.match(videoTag, /\bloop=""/i);
  assert.match(videoTag, /\bplaysInline=""/i);
  assert.match(videoTag, /\bcontrols=""/i);
  assert.match(videoTag, /aria-label="Video del proceso de trabajo de Innova 3D"/i);
  assert.match(html, /Activar sonido/);

  const video = await stat(
    new URL("../public/videos/innova-3d-proceso.mp4", import.meta.url),
  );
  assert.ok(video.size > 0);
});
