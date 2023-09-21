const Replicate = require("replicate");

const replicate = new Replicate({
  auth: "03d046cb1927368af414bd6cbb5734b884364d09",
});

async function start() {
  // const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
  // const input = { prompt: "an astronaut riding a horse on mars, hd, dramatic lighting, detailed" };
  // const output = await replicate.run(model, { input });


  // client model 1
  // const model = "jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b";

  // client model 2
  const model = "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b";
  
  
  const input = {
    image:
      "https://cdn.discordapp.com/attachments/1083680717910855722/1106205014764044351/output_20.png",
      scale: 4,
      // face_enhance: true
  };

  const output = await replicate.run(model, {input})

  console.log(output);
}

start();
