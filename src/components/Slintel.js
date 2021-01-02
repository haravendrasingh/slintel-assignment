import React, { useEffect, useState } from 'react';
import s from './Slintel.module.scss';
import logo from '../images/slintel_logo.svg';
import arrow from '../images/right-arrow.svg';
import orgChart from '../images/org-chart.png';
import firm from '../images/firm.png';
import psycho from '../images/psycho.png';
import tech from '../images/tech.png';
import buyer from '../images/buyer.png';
import sale from '../images/sale.png';
import bannerImg from '../images/bannerImg.png';
import footerImg from '../images/footer.png';

function Slintel() {

  const [collapseValues, setCollapseValues] = useState({});
  const [isBottom, setBottom] = useState(false);
  const [scrollbarTop, setScrollbarTop] = useState(30);

  useEffect(()=>{
    const handleScroll = ()=> {
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom + 300 >= docHeight) {
        setBottom(true);
      } else {
        setBottom(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  },[])

  const handleClick = (id, top) => {
    setScrollbarTop(top);
    if (id.includes("collapse")) {
      setCollapseValues({ ...collapseValues, [id]: true })
    }
    const anchor = document.getElementById(id);
    window.scrollTo({
      top: anchor.offsetTop - 100,
      left: 0,
      behavior: 'smooth'
    })

    // anchor.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={s.mainContainer}>
      <header className={s.appHeader}>
        <div><img src={logo} alt="logo" /></div>
        <div className={s.btn}>
          Book a Demo
       </div>
      </header>
      {!isBottom &&<div className={s.sidebar}>
        <div className={s.leftScrollbar} style={{top: `${scrollbarTop}px`}}></div>
        <ul>
          <li>
            <div onClick={() => handleClick("id1", 30)}>What is Sales Intelligence?</div>
            <ul>
              <li onClick={() => handleClick("id2", 30)}>Misconceptions About Sales Intelligence</li>
            </ul>
          </li>
          <li>
            <div onClick={() => handleClick("id3", 110)}>The Building Blocks of Sales Intelligence</div>
            <ul>
              <li onClick={() => handleClick("collapse1", 110)}>Organizational charts</li>
              <li onClick={() => handleClick("collapse2", 110)}>Job Posting Alerts </li>
              <li onClick={() => handleClick("collapse3", 110)}>Firmographics </li>
              <li onClick={() => handleClick("collapse4", 110)}>Psychographics</li>
              <li onClick={() => handleClick("collapse5", 110)}>Tech Stacks & Technographics</li>
              <li onClick={() => handleClick("collapse6", 110)}>Contract Renewal Alerts</li>
              <li onClick={() => handleClick("collapse7", 110)}>Company Updates</li>
            </ul>
          </li>
          <li>
            <div onClick={() => handleClick("id4", 390)}>The Benefits of Sales Intelligence: How Can Sales Intelligence Impact My Company?</div>
          </li>
          <li>
            <div onClick={() => handleClick("id5", 480)}>Sales Intelligence: How Actionable Is It, Really?</div>
            <ul >
              <li onClick={() => handleClick("collapse8", 480)}>Buyer Intent</li>
              <li onClick={() => handleClick("collapse9", 480)}>Propensity Score</li>
              <li onClick={() => handleClick("collapse10", 480)}>Lead Score</li>
            </ul>
          </li>
          <li>
            <div onClick={() => handleClick("id6", 620)}>Challenges of Using Sales Intelligence & How to Address Them</div>
            <ul >
              <li onClick={() => handleClick("id7", 620)}>Trustworthiness of Data</li>
              <li onClick={() => handleClick("id8", 620)}>Return-on-Investment </li>
            </ul>
          </li>
          <li >
            <div onClick={() => handleClick("id9", 750)}>Marketing Intelligence vs Sales Intelligence</div>
          </li>
          <li >
            <div onClick={() => handleClick("id10", 800)}>The Future of Sales Intelligence</div>
          </li>
        </ul>
      </div>}
      <div className={s.container}>
        <div className={s.banner}></div>
        <div className={s.section}>
          <div className={s.titleHeading}>Sales Intelligence: A Guide to Smart Selling</div>
          <p>
            If you asked someone what “sales intelligence” was a decade ago, they’d have mostly
            likely drawn a blank to your question. Sales intelligence as we know it simply did not
            exist back then. While it was a requirement for which sales teams of the past were yearning
            to find a solution, the technology to support the requirement was not easy to build.
                </p>
          <p>
            Today, thanks to the thriving universe of SaaS products and the technological leaps we’ve made,
            sales intelligence is powerful and accessible—enabling sales teams to sell better, faster, and
            with more insight than ever before.
                </p>
          <p>
            But what is sales intelligence, really? What are the building blocks that it is made up of,
            how can it impact your company, and how will it evolve in the future? That’s exactly what we’ll be
            exploring in this post. Let’s dive right into it.
                </p>
        </div>
        <div className={`${s.section} ${s.grayBg}`}>
          <div className={s.subHeading} id="id1">What is Sales Intelligence?</div>
          <p>
            Sales intelligence, in a nutshell, refers to the information and insights
            that companies can have about their prospective buyers.
                </p>
          <p>
            As a sales representative, manager, or VP, you’d want to have the most up-to-date,
            relevant, and personalized information about your target accounts’ users, buyers,
            and decision-makers. The more information you have about your prospects, the more
            are your chances of closing the sale, just because of that fact that you were able
            to accurately determine why they want your product/service and how it can help their cause.
                </p>
          <p>
            Sales intelligence helps you find the right kind of prospects for your company, enables you to
            reach them on the right platform, build a pitch that addresses their exact pain points, and
            shorten the time that it takes to close the deal.
                </p>
          <p>
            While that should give you a well-rounded idea of what sales intelligence is, we often find
            that several other things are often misconstrued as sales intelligence while they really aren’t.
            Let’s take a closer look at what those are.
                </p>


          <div className={s.paraHeading} id="id2">Misconceptions about Sales Intelligence</div>

          <p>
            Several companies out there provide leads or contact information to sales teams and call themselves
            sales intelligence firms. There are also plenty of tools out there that allow companies to track
            basic
            (or perhaps slightly more advanced) sales metrics like Customer Acquisition Cost (CAC), Customer
            Lifetime Value (CLV),
            average deal size, etc. on “sales intelligence dashboards”.
                </p>
          <p>
            While these are important facts and metrics that sales teams in any organization can benefit from,
            they aren’t
            really sales intelligence. Let’s take a look at the elements that make up sales intelligence, and
            the benefits
            of using it.
                </p>
        </div>
        <div className={s.section}>
          <div className={s.subHeading} id="id3">The Building Blocks of Sales Intelligence</div>
          <p>
            We’ve spoken about what sales intelligence is all about and how it can benefit your company.
            Now, let’s take a look at some of the key insights that help provide sales intelligence to teams.
          </p>
          <p>
            1. Organizational Charts <br />
            2. Job Posting Alerts<br />
            3. Firmographics<br />
            4. Psychographics<br />
            5. Tech Stacks & Technographics<br />
            6. Contract Renewal Alerts<br />
            7. Company Updates
          </p>
          <div className={s.collapseContainer}>
            <div id="collapse1" className={s.collapseBtn} onClick={() => setCollapseValues({ ...collapseValues, collapse1: !collapseValues.collapse1 })}>
              <div className={`${s.imgCon} ${collapseValues.collapse1 ? s.rototeImg : ''}`}><img src={arrow} alt="arrow" /></div>
              <div>Organizational Charts</div>
            </div>
            {collapseValues.collapse1 && <div className={s.collapseData}>
              <div className={s.collapseHeading}>What are Organizational Charts?</div>
              <p>
                Organizational charts, also referred to as organigrams or organograms, are a visual
                representation of a company’s structure.
                This chart enlists the employees of an organization and maps each of them out with
                respect to other employees within the organization—may
                it be peers, subordinates, or reporting managers.
                </p>
              <div className={s.collapseImg}><img src={orgChart} alt="chart" /></div>
              <div className={s.collapseHeading} style={{ marginTop: "20px" }}>How Can Organizational Charts Help My Company and Sales Team?</div>
              <p>
                Organograms can help you gain a fair understanding of how the reporting structure in
                an organization works.
                In the context of sales intelligence, they can give you insights about the exact
                person you need to reach
                out to when you want to close down a sale. They also allow you to understand who
                your product/service’s users
                are going to be in that organization, and if you have a product that can help
                multiple teams or divisions of a
                company, it paves the path for you to cross-sell and upsell your product across
                different functions of the company.
                </p>
            </div>
            }
          </div>
          <div className={s.collapseContainer}>
            <div id="collapse2" className={s.collapseBtn} onClick={() => setCollapseValues({ ...collapseValues, collapse2: !collapseValues.collapse2 })}>
              <div className={`${s.imgCon} ${collapseValues.collapse2 ? s.rototeImg : ''}`}><img src={arrow} alt="arrow" /></div>
              <div>Job Posting Alerts</div>
            </div>
            {collapseValues.collapse2 && <div className={s.collapseData}>
              <div className={s.collapseHeading}>What are Job Posting Alerts?</div>
              <p>
                As the name suggests, job posting alerts are notifications about a job listing that
                are put up
                by a client, target company, or potential buyer that can benefit from your
                product/service.
              </p>
              <div className={s.collapseHeading} style={{ marginTop: "20px" }}>How Can Job Posting Alerts Help My Company and Sales Team?</div>
              <p>
                Let’s say you’re selling a subscription to a social media management software and
                you receive an
                alert about one of your prospects (or a competitor’s clients) putting up a job
                listing for a Social Media Manager.
                This is an indication of impending change in the structure or tools usage of a
                brand, and it could also show that
                the brand is now likely open to purchasing a subscription for a social media
                management software to help aid their efforts.
                </p>
              <p>
                Any good sales intelligence software should be able to notify you about job postings
                that high-intent prospects are putting
                across the internet.
              </p>
            </div>
            }
          </div>
          <div className={s.collapseContainer}>
            <div id="collapse3" className={s.collapseBtn} onClick={() => setCollapseValues({ ...collapseValues, collapse3: !collapseValues.collapse3 })}>
              <div className={`${s.imgCon} ${collapseValues.collapse3 ? s.rototeImg : ''}`}><img src={arrow} alt="arrow" /></div>
              <div>Firmographics</div>
            </div>
            {collapseValues.collapse3 && <div className={s.collapseData}>
              <div className={s.collapseHeading}>What are Firmographics?</div>
              <p>
                Firmographics, also called emporographics or firm demographics, are attributes and
                characteristics that define any company or organization. Some examples of
                commonly used attributes used in firmographics are company size, company age, location,
                industry/vertical, annual revenue, customers, etc.
                </p>
              <div className={s.collapseHeading}>How Can Firmographics Help My Company and Sales Team?</div>
              <p>
                Firmographics allow you to segment your target accounts and prospects based on
                several criteria,
                and provide you with a much deeper understanding of your target markets. They also
                aid in gathering
                industry trends and build vertical-specific messaging and pitches to improve
                conversions.
                </p>
              <div className={s.collapseImg}><img src={firm} alt="firm" /></div>
              <p>
                Firmographics allow you to segment your target accounts and prospects based on
                several criteria, and
                provide you with a much deeper understanding of your target markets. They also aid
                in gathering industry
                trends and build vertical-specific messaging and pitches to improve conversions.
                </p>
            </div>
            }
          </div>
          <div className={s.collapseContainer}>
            <div id="collapse4" className={s.collapseBtn} onClick={() => setCollapseValues({ ...collapseValues, collapse4: !collapseValues.collapse4 })}>
              <div className={`${s.imgCon} ${collapseValues.collapse4 ? s.rototeImg : ''}`}><img src={arrow} alt="arrow" /></div>
              <div>Psychographics</div>
            </div>
            {collapseValues.collapse4 && <div className={s.collapseData}>
              <div className={s.collapseHeading}>What are Psychographics?</div>
              <p>
                Psychographics, simply put, is the segmentation and study of
                consumers based on their activities, interests, and opinions (AIOs).
                </p>
              <div className={s.collapseHeading}>How Can Psychographics Help My Company and Sales Team?</div>
              <p>
                Consumer behavior is diverse, so content and pitches that your team builds to appeal
                to
                one client might not really be well-received by another. Psychographics allow you to
                customize
                your content and outreach based on your clients’ AIOs—and this information can be a
                gamechanger
                when it comes to capturing your prospects’ attention.
                </p>
              <div className={s.collapseImg}><img src={psycho} alt="psycho" /></div>
              <p>
                Psychographics can provide in-depth information about what a prospect likes talking
                about, the channels and
                platforms on which they engage and interact with others the most, and even deep
                insights about the type of music
                they like, sports they watch, etc. This kind of information can help your sales team
                figure out topics to emphasize
                or stay away from when making the pitch, or even a conversation with a prospect.
                </p>
              <p>
                It can also help you create a variety of pitches that appeal to different kinds of
                customers as well. Here’s a post
                explaining the most common personality archetypes that might be of additional help.
                </p>
            </div>
            }
          </div>
          <div className={s.collapseContainer}>
            <div id="collapse5" className={s.collapseBtn} onClick={() => setCollapseValues({ ...collapseValues, collapse5: !collapseValues.collapse5 })}>
              <div className={`${s.imgCon} ${collapseValues.collapse5 ? s.rototeImg : ''}`}><img src={arrow} alt="arrow" /></div>
              <div>Tech Stacks & Technographics</div>
            </div>
            {collapseValues.collapse5 && <div className={s.collapseData}>
              <div className={s.collapseHeading}>What are Tech Stacks & Technographics?</div>
              <p>
                Tech stacks are nothing but the chain of tools, software, and technological services
                that an organization
                uses to function effectively. Technographics, on the other hand, is the profiling
                and segmentation of
                organizations based on the tools and technology that they use.
                </p>
              <div className={s.collapseHeading} style={{ marginBottom: "20px" }}>How Can Technographics Help My Company and Sales Team?</div>

              <div className={s.collapseImg}><img src={tech} alt="tech" /></div>
              <p>
                Technographics can provide a wealth of information to your company’s sales
                force—starting from something as simple
                as understanding the organizations out there that use your competitor’s
                product/service over yours; thus giving you
                a list of leads that you can reach out to right away, effectively.
                </p>
              <p>
                Beyond that, technographics can also help you understand the requirements of a
                company, and also help you build a
                more telling pitch about how your product will fit in the ecosystem of a prospect’s
                tech stack, especially if you’re
                selling software that has a lot of integrations.
                </p>
            </div>
            }
          </div>
          <div className={s.collapseContainer}>
            <div id="collapse6" className={s.collapseBtn} onClick={() => setCollapseValues({ ...collapseValues, collapse6: !collapseValues.collapse6 })}>
              <div className={`${s.imgCon} ${collapseValues.collapse6 ? s.rototeImg : ''}`}><img src={arrow} alt="arrow" /></div>
              <div>Contract Renewal Alerts</div>
            </div>
            {collapseValues.collapse6 && <div className={s.collapseData}>
              <div className={s.collapseHeading}>What are Contract Renewal Alerts?</div>
              <p>
                This one’s self explanatory—contract renewal alerts are notifications that remind
                you that the date
                of renewal of a competitor’s product contract (or even your own) is nearing.
                </p>
              <div className={s.collapseHeading}>How Can Contract Renewal Alerts Help My Company and Sales Team?</div>
              <p>
                Staying on top of information about a customer nearing the renewal date of a
                contract can help you sweep
                in and upsell your own product in the next renewal cycle. Alternatively, if it’s a
                competitor’s product
                that is being used by a prospect, a contract renewal alert will give you a heads-up
                to jump in and convince
                them to buy your product instead.
                </p>
            </div>
            }
          </div>
          <div className={s.collapseContainer}>
            <div id="collapse7" className={s.collapseBtn} onClick={() => setCollapseValues({ ...collapseValues, collapse7: !collapseValues.collapse7 })}>
              <div className={`${s.imgCon} ${collapseValues.collapse7 ? s.rototeImg : ''}`}><img src={arrow} alt="arrow" /></div>
              <div>Company Updates</div>
            </div>
            {collapseValues.collapse7 && <div className={s.collapseData}>
              <div className={s.collapseHeading}>What are Company Updates?</div>
              <p>
                Company updates, in its simplest sense, is any type of news or information about the
                internal and external affairs
                of a company. In the context of sales intelligence, company updates are snippets of
                information that can give you
                more insight into an organization’s growth trends, hiring process, or pain points
                that they are facing
                </p>
              <div className={s.collapseHeading}>How Can Company Updates Help My Sales Team?</div>
              <p>
                Company updates, which even includes job posting alerts that we discussed earlier,
                can help you know exactly what’s
                happening with your clients or target accounts’ organization. This can give you a
                fair idea of the general direction
                in which their brand is headed, or give you additional information about
                opportunities to upsell or cross-sell your product/service as well.

                </p>
              <p>
                Besides, it always helps to keep yourself informed with a target company’s news—even
                if it’s going to serve a function as simple as helping your
                sales rep start a conversation with, “Hey, I heard that you guys just hit 10M in
                annual revenue; that’s awesome!”. It can be impactful, and help
                prospects trust that you take a genuine interest in their brand’s well-being and
                growth.
                </p>
              <p>
                That wraps up our list of some of the major components of sales intelligence!
                </p>
            </div>
            }
          </div>
        </div>
        <div className={`${s.section} ${s.grayBg}`}>
          <div className={s.subHeading} id="id4">The Benefits of Sales Intelligence: How Can Sales Intelligence Impact My Company?</div>
          <p>
            Right off the bat, sales intelligence can:
             </p>
          <ul className={s.list}>
            <li>Increase the likelihood of winning a deal</li>
            <li>Improve your team’s lead-to-deal conversion rate</li>
            <li>Decrease the duration of your sales cycle</li>
            <li>Alert you when new sales opportunities arise</li>
            <li>Help create pitches that appeal the most to the prospect</li>
            <li>Save time while enriching lead information</li>
            <li>Provide valuable metrics that will help you determine buyer intent, propensity, etc.</li>
          </ul>

          <p>
            And while all that’s great, one question that may linger in your mind is, “how actionable is sales
            intelligence, really?”. Allow us to answer that.
                </p>
        </div>
        <div className={s.section}>
          <div className={s.subHeading} id="id5">Sales Intelligence: How Actionable Is It, Really?</div>
          <p>
            As we saw earlier, sales intelligence is all about improving the efficiency with which your sales
            force operates—in other words, increasing conversion rates while reducing the time it takes to
            garner more prospects and close deals. Having raw, unprocessed data can be of no aid to your
            business if these are the goals that your team sets out to achieve
          </p>
          <p>
            Sales intelligence, however, isn’t unprocessed data; it’s a collection of data-driven information
            and contextual insights that are built with the sole intention of helping your organization’s sales
            force.
            Let’s take a deeper look at some examples of actionable sales intelligence, how it is calculated,
            and how it can help your team sell better.
          </p>
          <div className={s.collapseContainer}>
            <div id="collapse8" className={s.collapseBtn} onClick={() => setCollapseValues({ ...collapseValues, collapse8: !collapseValues.collapse8 })}>
              <div className={`${s.imgCon} ${collapseValues.collapse8 ? s.rototeImg : ''}`}><img src={arrow} alt="arrow" /></div>
              <div>Buyer Intent</div>
            </div>
            {collapseValues.collapse8 && <div className={s.collapseData}>
              <p>
                Buyer intent or purchase intent is a metric that can be determined by taking various
                purchase intent
                signals of a buyer or decision-maker in a company into account.
                </p>

              <p>
                Let’s take the example of a brand that currently has no social media tools in its
                tech stack. The brand puts
                out a job posting for a social media manager and releases an end-of-year press
                filing stating that social media
                marketing is going to be one of their main focuses for this year.
                </p>
              <p>
                These are signals that indicate that the brand’s likelihood of purchasing a social
                media management software
                over the next three months is high. If you’re part of a sales team of a social media
                management software company,
                being notified about this can help you strike while the iron is hot and approach the
                brand at the right time,
                thus improving your chances of closing a deal.
                </p>
              <p>
                Buyer intent is a great example of actionable sales intelligence that can help your
                company make more informed sales
                decisions.
                </p>
            </div>
            }
          </div>
          <div className={s.collapseContainer}>
            <div id="collapse9" className={s.collapseBtn} onClick={() => setCollapseValues({ ...collapseValues, collapse9: !collapseValues.collapse9 })}>
              <div className={`${s.imgCon} ${collapseValues.collapse9 ? s.rototeImg : ''}`}><img src={arrow} alt="arrow" /></div>
              <div>Propensity Score</div>
            </div>
            {collapseValues.collapse9 && <div className={s.collapseData}>
              <p>
                Much like the previous example, a buyer’s propensity score is determined by factors
                that play into increasing
                their chances of buying one product over another. In addition to just the buyer
                intent metric, the propensity
                score aims to look at signals like customer pain points and immediate requirements
                that will make them favour
                one product, or a specific feature of a product or service over another.
                </p>

              <p>
                For example, let’s say your company’s social media management tool allows clients to
                create multiple users on it while
                your competitors’ don’t. In a case like this, if your target account’s social media
                team is one that has several active
                members in it, then the prospect might be more inclined to buy your product than
                your competitor’s, thus exhibiting a
                higher propensity to purchase your product.
                </p>
            </div>
            }
          </div>
          <div className={s.collapseContainer}>
            <div id="collapse10" className={s.collapseBtn} onClick={() => setCollapseValues({ ...collapseValues, collapse10: !collapseValues.collapse10 })}>
              <div className={`${s.imgCon} ${collapseValues.collapse10 ? s.rototeImg : ''}`}><img src={arrow} alt="arrow" /></div>
              <div>Buyer Intent</div>
            </div>
            {collapseValues.collapse10 && <div className={s.collapseData}>
              <p>
                While lead scoring has become much more of a marketing function in today’s world,
                thanks to advances
                in technology that have helped automate the process,
                it is still a valuable metric that can help sales teams prioritize high intent leads
                over others.
                </p>

              <p>
                Lead scoring is typically calculated by tracking the number of times a customer has
                interacted or engaged
                with your company’s website, content, emails,
                or employees, but can also be formulated using everything that we’ve discussed in
                this post thus far.
                </p>
              <div className={s.collapseImg}><img src={buyer} alt="buyer" /></div>
              <p>
                A prospect with a high lead score will have a better likelihood of purchasing your
                product compared to your other leads.
                Lead scores can also be valuable while identifying “super-users” or “super-leads”
                that can eventually become your brand’s
                promoters.
                </p>
              <p>
                Phew! We’ve finally come to the end of all the elements that constitute sales
                intelligence as a whole, and how it can enable
                your sellers to be better at what they do best
                </p>
              <p>
                However, no technology is perfect, and sales intelligence is no exception. Here are
                some of the common problems that brands run
                into while using sales intel to improve their growth.
                </p>
            </div>
            }
          </div>
        </div>
        <div className={`${s.section} ${s.grayBg}`}>
          <div className={s.subHeading} id="id6">Challenges of Using Sales Intelligence & How to Address Them</div>
          <div className={s.paraHeading} id="id7">Trustworthiness of Data</div>
          <p>
            Like it is the case with any other data-powered business solution, the impact and usefulness of
            sales
            intelligence is directly reliant on the accuracy, depth, and up-to-dateness of the information
            presented
            to your brand. “Bad data” that is out-of-date, incorrect, or wrongly attributed can affect the
            decisions
            that your sales force makes, and can negatively impact your sales as well. However, this can be
            easily tackled by:
             </p>
          <ol className={s.list}>
            <li>Ensuring that your information is gathered from a reliable source</li>
            <li>Always having a timestamp that represents when the information was updated last</li>
            <li>Manually verifying samples of data to see whether they meet quality standards</li>
          </ol>

          <p>
            Good sales intelligence software has all these in place, so this shouldn’t really be a can of
            worms as long as you buy your information from a reputable sales intel company.
          </p>
          <div className={s.paraHeading} id="id8">Return-on-Investment</div>
          <p>
            Sales intelligence is, by all means, valuable information for any company or team, and it
            isn’t inexpensive by any standards. But that doesn’t mean that it isn’t useful for your company.
            Sales intelligence can help you gain insights that will save you thousands of man-hours and help
            million dollar sales that might not have been possible without it—but keep in mind that it works
            best for companies that have large average deal values.
          </p>
          <p>
            If you’re a smaller brand that’s just setting out selling software, invest your sales funds wisely.
            An early-stage startup with less than $20k in ARR might not be able to file ROIs that justify the
            cost.
            However, if you’re a larger organization, sales intel could help you go from being neck-to-neck with
            your
            biggest competitor to being the industry leader (assuming your competition isn’t using sales
            intelligence as well
          </p>
          <p>
            Moving on!
          </p>
        </div>
        <div className={s.section}>
          <div className={s.subHeading} id="id9">Marketing Intelligence vs Sales Intelligence</div>
          <p>
            If you’ve been in the industry for a while now, chances are that you’ve also come across another
            similar (and on some level, even related) term called ”marketing intelligence”. Here’s a table
            enlisting
            the differences between marketing intelligence and sales intelligence.
             </p>

          <div className={s.collapseImg}><img src={sale} alt="sale" /></div>


          <p>
            We’ve spent a lot of time talking about what Sales Intelligence is all about and how far it’s come,
            but where do
            we see it going from here? These are our predictions for the future of sales intelligence.
          </p>

        </div>
        <div className={`${s.section} ${s.grayBg}`}>
          <div className={s.subHeading} id="id10">The Future of Sales Intelligence</div>
          <p>
            The sales intelligence marketing is rapidly expanding, and users are always
            on the lookout for more reliable and comprehensive information about their target accounts.
            Over the next 3 to 5 years, sales intelligence products will focus on improving the quality
            of the information they provide, and greatly focus on capturing and distributing more data points
            to clients. After that, though, the industry is wide open and the possibilities are endless.
             </p>
          <p>
            In a world where AI and predictive analytics are two of the top technologies that companies are
            invested in,
            sales intelligence will likely soon include a great deal of AI-assisted personalization that will
            help sales
            folks tell their customers exactly what they want to hear to close down sales faster. Bots could
            also help sales
            people approach prospects at the most probabilistically opportune moments to improve deal conversion
            rates.
          </p>
          <p>
            Data protection is also a hot topic right now, and companies, especially large firms like FAMGA, are
            taking privacy
            seriously. This might, in fact, spawn a new industry that’s focused on guarding sales people’s
            access to all the data
            we discussed in this post, and gaining these insights and information might by itself be a new
            challenge for this industry.
          </p>
        </div>
        <div className={s.bannerImg}>
          <img src={bannerImg} alt="bannerImg"/>
        </div>
        <div className={s.footerImg}>
          <img src={footerImg} alt="footerImg"/>
        </div>
      </div>
    </div>
  );
}

export default Slintel;