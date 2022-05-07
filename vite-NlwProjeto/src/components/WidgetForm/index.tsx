import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentsStep } from "./Steps/FeedbackContentsStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image:{
            source: ideaImageUrl,
            alt: "Imagem de uma lâmpada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "Imagem de um balão de pensamento"
        }

    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null);

    const [ feedbackSent, setFeedbackSent] = useState(false);

    function handlerRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }
 
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl sb-4 flex 
        flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        { feedbackSent ? (
            <FeedbackSucessStep onFeedbackRestartRequested={handlerRestartFeedback}/>
        ) : (
            <>
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
              ) : (
              <FeedbackContentsStep 
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handlerRestartFeedback}
              onFeedbackSent ={()=>setFeedbackSent(true)}
              />
             )}
             </>
        )}
         

             <footer className="text-xs text-neutral-400">
             Feito com ♥ por <a className="underline underline-offset-1" href="https://github.com/DanieleArrud"> Daniele A.</a> e <a className="underline underline-offset-1" href="https;//rockseat.com.br"> Rockseat</a>
             </footer>
        </div>
    )
}