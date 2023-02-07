import { chakra } from '@chakra-ui/react';
import Link from 'next/link';

import type { FC } from 'react';

import info from '__data/company/info.json';

// const name = 'Rupi Beauty Studio';
// const domain = 'https://www.rupibeautystudio.com';

export const TermsAndConditionsBody: FC = () => {
  return (
    <>
      <chakra.p pb={12} textAlign="center" color="gray.500">
        Welcome to Rupi beauty Studio!
      </chakra.p>
      <chakra.p
        py={4}
      >{`These terms and conditions outline the rules and regulations for the use of ${info.name}'s Website, located at ${info.domain}.`}</chakra.p>
      <chakra.p py={4}>
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Rupi beauty Studio if you do not
        agree to take all of the terms and conditions stated on this page.
      </chakra.p>
      <chakra.p py={4}>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements:
        &ldquo;Client&rdquo;, &ldquo;You&rdquo; and &ldquo;Your&rdquo; refers to
        you, the person log on this website and compliant to the Company&apos;s
        terms and conditions. &ldquo;The Company&rdquo;,
        &ldquo;Ourselves&rdquo;, &ldquo;We&rdquo;, &ldquo;Our&rdquo; and
        &ldquo;Us&rdquo;, refers to our Company. &ldquo;Party&rdquo;,
        &ldquo;Parties&rdquo;, or &ldquo;Us&rdquo;, refers to both the Client
        and ourselves. All terms refer to the offer, acceptance and
        consideration of payment necessary to undertake the process of our
        assistance to the Client in the most appropriate manner for the express
        purpose of meeting the Client&apos;s needs in respect of provision of
        the Company&apos;s stated services, in accordance with and subject to,
        prevailing law of Netherlands. Any use of the above terminology or other
        words in the singular, plural, capitalization and/or he/she or they, are
        taken as interchangeable and therefore as referring to same.
      </chakra.p>
      <chakra.h3 py={4} fontFamily="body">
        <strong>Cookies</strong>
      </chakra.h3>
      <chakra.p py={4}>
        {`We employ the use of cookies. By accessing Rupi beauty Studio, you
        agreed to use cookies in agreement with the ${info.name}'s`}{' '}
        <Link href={`/policies/privacy`}>Privacy Policy.</Link>
      </chakra.p>
      <chakra.p py={4}>
        Most interactive websites use cookies to let us retrieve the user&apos;s
        details for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting our
        website. Some of our affiliate/advertising partners may also use
        cookies.
      </chakra.p>
      <chakra.h3 py={4} fontFamily="body">
        <strong>License</strong>
      </chakra.h3>
      <chakra.p py={4}>
        {`Unless otherwise stated, ${info.name} and/or its licensors own the intellectual property rights for all material on ${info.name}. All intellectual property rights are reserved. You may access this from Rupi beauty Studio for your own personal use subjected to restrictions set in these terms and conditions.`}
      </chakra.p>
      <chakra.p py={4}>You must not:</chakra.p>
      <chakra.ul listStyleType="initial" pl={8}>
        <chakra.li>Republish material from Rupi beauty Studio</chakra.li>
        <chakra.li>
          Sell, rent or sub-license material from Rupi beauty Studio
        </chakra.li>
        <chakra.li>
          Reproduce, duplicate or copy material from Rupi beauty Studio
        </chakra.li>
        <chakra.li>Redistribute content from Rupi beauty Studio</chakra.li>
      </chakra.ul>
      <chakra.p py={4}>
        This Agreement shall begin on the date hereof. Our Terms and Conditions
        were created with the help of this{' '}
        <a href="https://www.termsandconditionsgenerator.com/">
          Terms and Conditions Generator
        </a>
        .
      </chakra.p>
      <chakra.p py={4}>
        {`Parts of this website offer an opportunity for users to post and
        exchange opinions and information in certain areas of the website. ${info.name} does not filter, edit, publish or review
        Comments prior to their presence on the website. Comments do not reflect
        the views and opinions of ${info.name},its agents
        and/or affiliates. Comments reflect the views and opinions of the person
        who post their views and opinions. To the extent permitted by applicable
        laws, ${info.name} shall not be liable for the
        Comments or for any liability, damages or expenses caused and/or
        suffered as a result of any use of and/or posting of and/or appearance
        of the Comments on this website.`}
      </chakra.p>
      <chakra.p py={4}>
        {`${info.name} reserves the right to monitor all
        Comments and to remove any Comments which can be considered
        inappropriate, offensive or causes breach of these Terms and Conditions.`}
      </chakra.p>
      <chakra.p py={4}>You warrant and represent that:</chakra.p>
      <chakra.ul listStyleType="initial" pl={8}>
        <chakra.li>
          You are entitled to post the Comments on our website and have all
          necessary licenses and consents to do so;
        </chakra.li>
        <chakra.li>
          The Comments do not invade any intellectual property right, including
          without limitation copyright, patent or trademark of any third party;
        </chakra.li>
        <chakra.li>
          The Comments do not contain any defamatory, libelous, offensive,
          indecent or otherwise unlawful material which is an invasion of
          privacy
        </chakra.li>
        <chakra.li>
          The Comments will not be used to solicit or promote business or custom
          or present commercial activities or unlawful activity.
        </chakra.li>
      </chakra.ul>
      <chakra.p py={4}>
        {`You hereby grant ${info.name} a non-exclusive
        license to use, reproduce, edit and authorize others to use, reproduce
        and edit any of your Comments in any and all forms, formats or media.`}
      </chakra.p>
      <chakra.h3 py={4} fontFamily="body">
        <strong>Hyperlinking to our Content</strong>
      </chakra.h3>
      <chakra.p py={4}>
        The following organizations may link to our Website without prior
        written approval:
      </chakra.p>
      <chakra.ul listStyleType="inherit" pl={8}>
        <chakra.li>Government agencies;</chakra.li>
        <chakra.li>Search engines;</chakra.li>
        <chakra.li>News organizations;</chakra.li>
        <chakra.li>
          Online directory distributors may link to our Website in the same
          manner as they hyperlink to the Websites of other listed businesses;
          and
        </chakra.li>
        <chakra.li>
          System wide Accredited Businesses except soliciting non-profit
          organizations, charity shopping malls, and charity fundraising groups
          which may not hyperlink to our Web site.
        </chakra.li>
      </chakra.ul>
      <chakra.p py={4}>
        These organizations may link to our home page, to publications or to
        other Website information so long as the link: (a) is not in any way
        deceptive; (b) does not falsely imply sponsorship, endorsement or
        approval of the linking party and its products and/or services; and (c)
        fits within the context of the linking party&apos;s site.
      </chakra.p>
      <chakra.p py={4}>
        We may consider and approve other link requests from the following types
        of organizations:
      </chakra.p>
      <chakra.ul listStyleType="inherit" pl={8}>
        <chakra.li>
          commonly-known consumer and/or business information sources;
        </chakra.li>
        <chakra.li>dot.com community sites;</chakra.li>
        <chakra.li>
          associations or other groups representing charities;
        </chakra.li>
        <chakra.li>online directory distributors;</chakra.li>
        <chakra.li>internet portals;</chakra.li>
        <chakra.li>accounting, law and consulting firms; and</chakra.li>
        <chakra.li>educational institutions and trade associations.</chakra.li>
      </chakra.ul>
      <chakra.p py={4}>
        We will approve link requests from these organizations if we decide
        that: (a) the link would not make us look unfavorably to ourselves or to
        our accredited businesses; (b) the organization does not have any
        negative records with us; (c) the benefit to us from the visibility of
        the hyperlink compensates the absence of Rupi Brows &amp; Esthetic
        Studio; and (d) the link is in the context of general resource
        information.
      </chakra.p>
      <chakra.p py={4}>
        These organizations may link to our home page so long as the link: (a)
        is not in any way deceptive; (b) does not falsely imply sponsorship,
        endorsement or approval of the linking party and its products or
        services; and (c) fits within the context of the linking party&apos;s
        site.
      </chakra.p>
      <chakra.p py={4}>
        {`If you are one of the organizations listed in paragraph 2 above and are
        interested in linking to our website, you must inform us by sending an
        e-mail to ${info.name}. Please include your name,
        your organization name, contact information as well as the URL of your
        site, a list of any URLs from which you intend to link to our Website,
        and a list of the URLs on our site to which you would like to link. Wait
        2-3 weeks for a response.`}
      </chakra.p>
      <chakra.p py={4}>
        Approved organizations may hyperlink to our Website as follows:
      </chakra.p>
      <chakra.ul listStyleType="inherit" pl={8}>
        <chakra.li>By use of our corporate name; or</chakra.li>
        <chakra.li>
          By use of the uniform resource locator being linked to; or
        </chakra.li>
        <chakra.li>
          By use of any other description of our Website being linked to that
          makes sense within the context and format of content on the linking
          party’s site.
        </chakra.li>
      </chakra.ul>
      <chakra.p py={4}>
        {`No use of ${info.name}'s logo or other artwork will
        be allowed for linking absent a trademark license agreement.`}
      </chakra.p>
      <chakra.h3 py={4} fontFamily="body">
        <strong>iFrames</strong>
      </chakra.h3>
      <chakra.p py={4}>
        Without prior approval and written permission, you may not create frames
        around our Webpages that alter in any way the visual presentation or
        appearance of our Website.
      </chakra.p>
      <chakra.h3 py={4} fontFamily="body">
        <strong>Content Liability</strong>
      </chakra.h3>
      <chakra.p py={4}>
        We shall not be hold responsible for any content that appears on your
        Website. You agree to protect and defend us against all claims that is
        rising on your Website. No link(s) should appear on any Website that may
        be interpreted as libelous, obscene or criminal, or which infringes,
        otherwise violates, or advocates the infringement or other violation of,
        any third party rights.
      </chakra.p>
      <chakra.h3 py={4} fontFamily="body">
        <strong>Your Privacy</strong>
      </chakra.h3>
      <chakra.p py={4}>
        Please read <Link href="/policies/privacy">Privacy Policy</Link>
      </chakra.p>
      <chakra.h3 py={4} fontFamily="body">
        <strong>Reservation of Rights</strong>
      </chakra.h3>
      <chakra.p py={4}>
        We reserve the right to request that you remove all links or any
        particular link to our Website. You approve to immediately remove all
        links to our Website upon request. We also reserve the right to amen
        these terms and conditions and it&apos;s linking policy at any time. By
        continuously linking to our Website, you agree to be bound to and follow
        these linking terms and conditions.
      </chakra.p>
      <chakra.h3 py={4} fontFamily="body">
        <strong>Removal of links from our website</strong>
      </chakra.h3>
      <chakra.p py={4}>
        If you find any link on our Website that is offensive for any reason,
        you are free to contact and inform us any moment. We will consider
        requests to remove links but we are not obligated to or so or to respond
        to you directly.
      </chakra.p>
      <chakra.p py={4}>
        We do not ensure that the information on this website is correct, we do
        not warrant its completeness or accuracy; nor do we promise to ensure
        that the website remains available or that the material on the website
        is kept up to date.
      </chakra.p>
      <chakra.h3 py={4} fontFamily="body">
        <strong>Disclaimer</strong>
      </chakra.h3>
      <chakra.p py={4}>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties and conditions relating to our website and
        the use of this website. Nothing in this disclaimer will:
      </chakra.p>
      <chakra.ul listStyleType="inherit" pl={8}>
        <chakra.li>
          limit or exclude our or your liability for death or personal injury;
        </chakra.li>
        <chakra.li>
          limit or exclude our or your liability for fraud or fraudulent
          misrepresentation;
        </chakra.li>
        <chakra.li>
          limit any of our or your liabilities in any way that is not permitted
          under applicable law; or
        </chakra.li>
        <chakra.li>
          exclude any of our or your liabilities that may not be excluded under
          applicable law.
        </chakra.li>
      </chakra.ul>
      <chakra.p py={4}>
        The limitations and prohibitions of liability set in this Section and
        elsewhere in this disclaimer: (a) are subject to the preceding
        paragraph; and (b) govern all liabilities arising under the disclaimer,
        including liabilities arising in contract, in tort and for breach of
        statutory duty.
      </chakra.p>
      <chakra.p py={4}>
        As long as the website and the information and services on the website
        are provided free of charge, we will not be liable for any loss or
        damage of any nature.
      </chakra.p>
    </>
  );
};
