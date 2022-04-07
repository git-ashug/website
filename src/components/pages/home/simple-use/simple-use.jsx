import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import discord from './images/discord.svg';
import mailgun from './images/mailgun.svg';
import msTeams from './images/ms-teams.svg';
import sendgrid from './images/sendgrid.svg';
import slack from './images/slack.svg';
import twilio from './images/twilio.svg';

const TITLE = 'Simple to use outgoing communication layer';
const LINK_NAME = 'Show all services';
const LINK_URL = '/';
const CARDS = [
  {
    icon: <img src={sendgrid} alt="" loading="lazy" width={30} height={30} />,
    title: 'Sendgrid',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    icon: <img src={twilio} alt="" loading="lazy" width={36} height={36} />,
    title: 'Twilio',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    icon: <img src={mailgun} alt="" loading="lazy" width={32} height={32} />,
    title: 'Mailgun',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    icon: <img src={slack} alt="" loading="lazy" width={28} height={28} />,
    title: 'Slack',
    text: 'Lorem Ipsum is simply dummy text of the printing',
    comingSoon: true,
  },
  {
    icon: <img src={discord} alt="" loading="lazy" width={34} height={25} />,
    title: 'Discord',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    comingSoon: true,
  },
  {
    icon: <img src={msTeams} alt="" loading="lazy" width={36} height={33} />,
    title: 'MS Teams',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
];

const SimpleUse = () => (
  <section className="simple-use safe-paddings bg-gray-2 pb-30 pt-40 lg:pt-32 lg:pb-24 md:pt-20 md:pb-16 sm:pt-10 sm:pb-8">
    <div className="container flex flex-col items-center">
      <Heading
        size="md"
        tag="h2"
        className="max-w-[764px] text-center leading-tight md:text-3xl"
        theme="white"
      >
        {TITLE}
      </Heading>
      <Link className="mt-7 sm:mt-5 sm:text-xs" to={LINK_URL} theme="primary-underline" size="sm">
        {LINK_NAME}
      </Link>

      <div className="mt-10 grid grid-cols-6 items-start gap-x-10 xl:gap-x-7 lg:grid-cols-3 lg:gap-y-7">
        {CARDS.map(({ icon, title, text, comingSoon }, index) => (
          <div className="rounded-[20px] bg-black lg:h-full lg:rounded-2xl" key={index}>
            <div className="flex items-center p-4">
              <div className="mr-3.5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white">
                {icon}
              </div>
              <h3 className="text-lg leading-tight text-white">{title}</h3>
            </div>
            <div className="relative p-4 pb-5 before:absolute before:top-0 before:left-0 before:h-px before:w-full before:bg-white before:opacity-10">
              <p className="text-sm leading-tight text-gray-8">{text}</p>
              {comingSoon && (
                <span className="mt-1 block text-sm text-secondary-2">Coming Soon...</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SimpleUse;
