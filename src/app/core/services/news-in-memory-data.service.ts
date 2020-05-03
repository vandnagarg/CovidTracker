import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INews } from 'src/app/shared/interfaces/INews';
import { IState } from 'src/app/shared/interfaces/IState';

export class NewsInMemoryDataService implements InMemoryDbService  {

  constructor() { }

  createDb() {
    const allNews: INews[] = [
      {
        id:1,
        title:"Fighting COVID-19 with facts not fear: How India can get back to work after coronavirus lockdown",
        description:"Under complete lockdown less than a quarter of India's $2.8 trillion economy is functional. We are expected to lose over Rs 32,000 crore ($4.5 billion) every day during the lockdown",
        fullnews:'We are now in lockdown, exploring novel medical treatments and are on the hunt for a vaccine that will stop this virus in its tracks. And since the scenario is grim, doctors, scientists, and governments are working on an accelerated mission mode.',
        summary:'It is an understatement to say that our world has changed dramatically over the last few months. The novel coronavirus pandemic has resulted in unimaginable loss to the global economy and the loss of human lives has been unprecedented in an era of global peace.',
        file:'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/shut_shops_660_260420123014.jpg'
      },
      {
        id:2,
        title:"COVID-19: MYTHS AND FACTS",
        description:"Coronavirus (COVID-19) is a new virus which has quickly spread around the world. While initially mainly affecting Asia, Europe and North America, more people are now testing positive in Southern Africa. This is also where the largtest number of people are affected by HIV.",
        fullnews:'As scientists and doctors continue their work to understand and treat COVID-19 our knowledge of, and ability to treat and prevent the virus will improve. For now, it’s important to follow official government advice and get information only from reliable sources like Avert.org, the World Health Organization (WHO) or your government’s health department. ',
        summary:'FAST FACTS COVID-19 is a new virus which has spread quickly to many countries around the world including in Southern Africa. Knowing the facts about COVID-19 symptoms, how the virus spreads and what you can do to stop it will help protect you and your community.',
        file:'../assets/COVIDmyths.jpg'
      }
    ];

    return {allNews};
  }
  genId(allnews: INews[]): number {
    return allnews.length > 0 ? Math.max(...allnews.map(news => news.id)) + 1 : 1;
  }


}
