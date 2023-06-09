// import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Frequently Asked Language School Questions",
    rows: [
        {
            title: "How long does it take to learn a language?",
            content: `On average, it typically takes at least 90 hours of focused learning to reach a beginner level of speaking a foreign language. However, there are many factors that can influence how quickly you learn a language, such as your learning style (visual vs auditory), motivation, age, and even level of immersion!

            For example, you're more likely to pick up a new language quicker, if you take a language course in a country where that language is widely spoken, since you will be consistently exposed to social cues, have daily conversations, and hear how the language is spoken when actually used by native speakers.`,
        },
        {
            title: "How do I choose a good language school abroad?",
            content:
                "You should first decide whether you want to learn the language through immersion or in a classroom setting. You should also consider how long you can commit to learning the language. If you have several months to spend living in that country, then an immersive program may be perfect for you! However, if you can only commit to a shorter period of time, a more structured setting like a classroom may guarantee you more chances of intensive learning.",
        },
        {
            title: "Why should I learn a second language?",
            content: `Learning a new language can make you a more competitive applicant in the workforce, increase your cognitive ability, and promote cultural understanding. `,
        },
        {
            title: "What is the most useful language to study?",
            content: <p>Chinese, Spanish, and French are among the most widely spoken languages in the world, making them especially useful if youre working overseas or looking to communicate with others around the world. Learning a new language opens the door to new opportunities professionally and personally.</p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const FaqPart = () => {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
};

export default FaqPart;
