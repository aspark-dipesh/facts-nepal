import ApplyForm from "@/app/components/careers/ApplyForm"
import JobList from "../data.json"
export default async function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const Job = JobList.filter((item) => item.slug === params.slug)[0]

  return (
    <div className="container mx-auto max-w-5xl py-20">
      <h1 className="text-3xl font-bold">{Job.title}</h1>
      <p className="mt-3 font-bold text-lg">{Job.department}</p>
      <p className="mt-3 font-bold text-xl">{Job.location}</p>
      <div className="mt-5">
        <div className="sc-gGBfsJ dqZSfb">
          <p>
            <strong>What will you get to do in this Small Business Benelux Account Executive role?</strong>
          </p>
          <p>
            As an Account Executive at HubSpot, you use outbound selling strategies to find new business and help them
            grow using HubSpot software. You run online demos of the HubSpot software and successfully sell the HubSpot
            value proposition. Your target clients will largely consist of small businesses. This position would be
            based out of your home office working in an inside sales model, and it is a full closing role.
          </p>
          <p>
            We are actively hiring for a Small Business Account Executive;{" "}
            <strong>
              candidates are eligible to be office, flex or remotely located in the Republic of Ireland based on
              individual preference!{" "}
            </strong>
            Please check out this article for more context:{" "}
            <a href="https://www.hubspot.com/careers-blog/future-of-work-hybrid">
              The Future of Work at HubSpot: How We&apos;re Building a Hybrid Company.
            </a>
          </p>
          <p>
            <strong>What are the responsibilities of a Account Executive at HubSpot?</strong>
          </p>
          <p>In this role, you will get to:</p>
          <ul>
            <li>
              Quickly identify challenges that our prospective customers face and discover the best inbound marketing
              solutions for their business
            </li>
            <li>Consistently close new business at or above quota level</li>
            <li>Nurture relationships with highly qualified opportunities at small and mid-sized companies</li>
            <li>Build relationships with prospects and internal stakeholders to grow new business</li>
            <li>
              Work collaboratively with Factsnepals&apos;s marketing and technology departments to evolve our sales
              strategy when new features and products are introduced&nbsp;
            </li>
            <li>Help shape the future of Factsnepals&apos;s mission with your perspectives, ideas, and skills</li>
          </ul>
          <p>
            <strong>What are the role requirements?</strong>
          </p>
          <ul>
            <li>Candidates must be based in Ireland to be considered for a remote opportunity</li>
            <li>
              1+ years of<strong>&nbsp;Closing</strong>&nbsp;Sales&nbsp;experience
            </li>
            <li>
              <strong>Fluency in English. (Dutch/Nordics languages are nice to have but not essential)</strong>
            </li>
            <li>Unmatched consultative selling and closing skills</li>
            <li>Accurate forecasting and pipeline management</li>
            <li>Track record of being a high performer (e.g. over quota, President&apos;s Club)</li>
            <li>A sharp focus on your goals and a strong approach for achieving them</li>
          </ul>
          <p>
            <strong>Who excels in this role?</strong>
          </p>
          <p>Top performers in the&nbsp; Account Executive position usually have:</p>
          <ul>
            <li>Strong communication, time management and adaptability in order to be set up for success remotely</li>
            <li>Experience working in a high-growth, &quot;scale up&quot; environment</li>
            <li>Passion for&nbsp;helping businesses grow and curiosity about the tech industry</li>
            <li>Humility and enthusiasm in their work</li>
          </ul>
          <p>
            <strong>&nbsp;What are some of the benefits of working at HubSpot?</strong>
          </p>
          <ul>
            <li>Generous remuneration and stock units</li>
            <li>Interactive employee training and onboarding&nbsp;</li>
            <li>An education allowance up to €4,000 per annum</li>
            <li>Pension</li>
            <li>Health Insurance</li>
            <li>Life Assurance (x4 times your annual salary)</li>
            <li>Long term illness cover</li>
            <li>25 days holidays</li>
            <li>Amazing colleagues to learn from and enjoy company social outings, parties, and events</li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <span>
              <em>
                <strong>&nbsp;Accepting Future Applications</strong>
              </em>
            </span>
          </p>
          <p>&nbsp;</p>
          <div className="content-conclusion">
            <hr />
            <p>
              <em data-stringify-type="italic">We know the</em>
              <em data-stringify-type="italic">
                {" "}
                <a
                  data-sk="tooltip_parent"
                  data-stringify-link="https://www.theatlantic.com/magazine/archive/2014/05/the-confidence-gap/359815/"
                  href="https://www.theatlantic.com/magazine/archive/2014/05/the-confidence-gap/359815/"
                  className="c-link">
                  confidence gap
                </a>
              </em>
              <em data-stringify-type="italic">&nbsp;and</em>
              <em data-stringify-type="italic">
                <a
                  data-sk="tooltip_parent"
                  data-stringify-link="https://www.braintreepayments.com/blog/overcoming-imposter-syndrome/"
                  href="https://www.braintreepayments.com/blog/overcoming-imposter-syndrome/"
                  className="c-link">
                  {" "}
                  imposter syndrome
                </a>
              </em>
              <em data-stringify-type="italic">
                &nbsp;can get in the way of meeting spectacular candidates, so please don’t hesitate to apply — we’d
                love to hear from you.
              </em>
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>
                If you need accommodations or assistance due to a disability, please reach out to us{" "}
                <a
                  data-saferedirecturl="https://www.google.com/url?q=https://form.asana.com/?k%3DXr9-j19kRaY5T5NjIeyx4Q%26d%3D8587152060687&amp;source=gmail&amp;ust=1699378163995000&amp;usg=AOvVaw2_XirAqwPzHwePk2ZYcL3q"
                  href="https://form.asana.com/?k=Xr9-j19kRaY5T5NjIeyx4Q&amp;d=8587152060687">
                  using this form
                </a>
                .
              </strong>
              &nbsp;
              <em>
                This information will be treated as confidential and used only for the purpose of determining an
                appropriate accommodation for the interview process.
              </em>
            </p>
            <p>&nbsp;</p>
            <hr />
            <p>&nbsp;</p>
            <p>
              <em>
                <strong>Germany Applicants:</strong> (m/f/d) - link to Factsnepal&apos;s Career
                Diversity&nbsp;page&nbsp;
                <a
                  data-saferedirecturl="https://www.google.com/url?q=https://www.hubspot.com/careers/diversity&amp;source=gmail&amp;ust=1642285588184000&amp;usg=AOvVaw3xxMKJX-6TTmbnyN6vYtUx"
                  href="https://www.hubspot.com/careers/diversity">
                  here
                </a>
                .
              </em>
            </p>
            <p>&nbsp;</p>
            <hr />
            <p>
              <strong>About HubSpot</strong>
            </p>
            <p>
              <span className="font-normal">
                HubSpot (NYSE: HUBS) is a leading customer relationship management (CRM) platform that provides software
                and support to help businesses grow better. We build marketing, sales, service, and website management
                products that start free and scale to meet our customers’ needs at any stage of growth. We’re also
                building a company culture that empowers people to do their best work. If that sounds like something
                you’d like to be part of, we’d love to hear from you.
              </span>
            </p>
            <p>
              <span className="font-normal">You can find out more about our company culture in the </span>
              <a href="http://culturecode.com/">
                <span className="font-normal">HubSpot Culture Code</span>
              </a>
              <span className="font-normal">, which has more than 5M views, and learn about </span>
              <a href="https://www.hubspot.com/jobs/diversity-inclusion">
                <span className="font-normal">our commitment to creating a diverse and inclusive workplace</span>
              </a>
              <span className="font-normal">
                , too. Thanks to the work of every employee globally, HubSpot was named the #2 Best Place to Work on
                Glassdoor in 2022, and has been recognized for award-winning culture by Great Place to Work, Comparably,
                Fortune, Entrepreneur, Inc., and more.
              </span>
            </p>
            <p>
              <span className="font-normal">
                Headquartered in Cambridge, Massachusetts, HubSpot was founded in 2006. Today, thousands of employees
                work across the globe in HubSpot offices and remotely. Visit our{" "}
              </span>
              <a href="https://www.hubspot.com/careers">
                <span className="font-normal">careers website</span>
              </a>
              <span className="font-normal"> to learn more about culture and opportunities at HubSpot.&nbsp;</span>
            </p>
            <hr />
            <p>
              <em data-stringify-type="italic">
                By submitting your application, you agree that HubSpot may collect your personal data for recruiting,
                global organization planning, and related purposes. Factsnepals&apos;s&nbsp;
              </em>
              <em data-stringify-type="italic">
                <a
                  data-sk="tooltip_parent"
                  data-stringify-link="https://legal.hubspot.com/privacy-policy"
                  href="https://legal.hubspot.com/recruiting-privacy-notice"
                  className="c-link">
                  Privacy Notice
                </a>
              </em>
              <em data-stringify-type="italic">
                &nbsp;explains what personal information we may process, where we may process your personal information,
                our purposes for processing your personal information, and the rights you can exercise over HubSpot’s
                use of your personal information.
              </em>
              <span
                data-sk="tooltip_parent"
                className="c-message__edited_label">
                &nbsp;
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* apply form */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold">Apply for this job</h2>
        <ApplyForm />
      </div>
    </div>
  )
}
