import styles from "./MagicWand.module.css";
import { Configuration, OpenAIApi } from "openai";

const complete = async () => {
  try {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Suggest a name for an animal

      Animal: dog
      Name:`,
    });
    console.log(completion.data[0].text);
  } catch (err) {
    console.log(err);
  }
};

function MagicWand({ isValid }) {
  const onClickHandler = (e) => {
    if (!isValid) return;
    complete();
  };
  return (
    <svg
      onClick={onClickHandler}
      className={styles.magicwand}
      enable-background="new 0 0 48 48"
      height="30px"
      version="1.1"
      viewBox="0 0 48 48"
      width="30px"
    >
      <g id="Expanded">
        <g>
          <g>
            <path d="M5,44c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l26.871-26.87c0.391-0.391,1.023-0.391,1.414,0     s0.391,1.023,0,1.414L5.707,43.707C5.512,43.902,5.256,44,5,44z" />
          </g>
          <g>
            <path d="M31.613,3.658l4.853,4.853l6.789-3.588l-3.59,6.789l4.674,4.674l-6.18-1.45l-3.393,7.275l-0.977-7.821l-7.822-0.978     l7.273-3.396L31.613,3.658 M31.613,1.958c-0.288,0-0.578,0.073-0.841,0.223c-0.665,0.379-0.995,1.157-0.805,1.899l1.279,4.991     l-5.996,2.799c-0.686,0.32-1.078,1.057-0.96,1.805c0.118,0.748,0.717,1.328,1.468,1.422l6.51,0.814l0.813,6.509     c0.094,0.752,0.674,1.351,1.423,1.469c0.089,0.014,0.177,0.021,0.265,0.021c0.652,0,1.258-0.376,1.54-0.982l2.809-6.022     l4.835,1.135c0.13,0.03,0.26,0.045,0.389,0.045c0.607,0,1.18-0.326,1.485-0.873c0.369-0.664,0.254-1.492-0.283-2.029     l-3.786-3.786l3.003-5.68c0.349-0.659,0.227-1.469-0.301-1.997c-0.327-0.327-0.762-0.498-1.203-0.498     c-0.27,0-0.543,0.064-0.794,0.197l-5.68,3.002l-3.966-3.966C32.488,2.129,32.053,1.958,31.613,1.958L31.613,1.958z" />
          </g>
        </g>
      </g>
    </svg>
  );
}
export default MagicWand;
