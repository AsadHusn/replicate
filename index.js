const Replicate = require("replicate");

const replicate = new Replicate({
  auth: "03d046cb1927368af414bd6cbb5734b884364d09",
});

async function start() {
  // const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
  // const input = { prompt: "an astronaut riding a horse on mars, hd, dramatic lighting, detailed" };
  // const output = await replicate.run(model, { input });
  // image:
  // "https://replicate.delivery/pbxt/IJZOELWrncBcjdE1s5Ko8ou35ZOxjNxDqMf0BhoRUAtv76u4/room.png",

  const model =
    "jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b";

  // "https://replicate.delivery/pbxt/InyqoW9jIFyHDVHYCZiQ23LVzXkCPNOkl2nJLtOrdIZVfnZi/988d4bdf-1e01-48d5-986a-825b00b17f87.png",

  const input = {
    // image:"https://cdn.discordapp.com/attachments/1083680717910855722/1106205014764044351/output_20.png",
    // image: "https://imgtr.ee/images/2023/05/19/2dmWs.jpg",

    // scale: 4,
    // prompt: "",
    // prompt: "a cheerful modernist bedroom",
    // a_prompt: "best quality, extremely detailed",
    // n_prompt:
    //   "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
    // ddim_steps: 20,
    // num_samples: 3,
    // value_threshold: 0.1,
    // image_resolution: "512",
    // detect_resolution: 512,
    // distance_threshold: 0.1,

    scale: 9,
    a_prompt: "best quality, extremely detailed",
    n_prompt:
      "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
    ddim_steps: 20,
    num_samples: "4",
    value_threshold: 0.1,
    image_resolution: "512",
    detect_resolution: 512,
    distance_threshold: 0.1,
    prompt:
      "A Modern theme Living Room with Sofa, Coffee, tableTV, standFloor, lampArea, rugAccent and pillows",
    

      image: ""
  
    };

  const output = await replicate.run(model, { input });

  console.log(output);
}

start();
