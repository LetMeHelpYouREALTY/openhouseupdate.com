import type { RequestHandler } from '@builder.io/qwik-city'

const buildRssFeed = (): string => {
  const currentDate = new Date().toISOString()
  const feedItems = [
    {
      title: 'Las Vegas Real Estate Market Update',
      description: 'Latest market trends and insights for Las Vegas real estate',
      url: 'https://www.openhouseupdate.com/services/market-analysis/',
      guid: 'market-update-1',
    },
    {
      title: "This Weekend's Open Houses in Las Vegas",
      description: 'Discover the best open houses happening this weekend',
      url: 'https://www.openhouseupdate.com/this-weekend/',
      guid: 'open-houses-weekend',
    },
    {
      title: 'Home Buying Guide for Las Vegas',
      description: 'Complete guide to buying a home in Las Vegas with Dr. Jan Duffy',
      url: 'https://www.openhouseupdate.com/services/buyer-services/',
      guid: 'buying-guide',
    },
    {
      title: 'Selling Your Home in Las Vegas',
      description: 'Expert tips for selling your home in the Las Vegas market',
      url: 'https://www.openhouseupdate.com/services/seller-services/',
      guid: 'selling-guide',
    },
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Open House Update - Las Vegas Real Estate</title>
    <description>Professional real estate services in Las Vegas with Dr. Jan Duffy</description>
    <link>https://www.openhouseupdate.com/</link>
    <language>en-US</language>
    <copyright>Copyright ${new Date().getFullYear()} Dr. Jan Duffy</copyright>
    <managingEditor>DrDuffy@OpenHouseUpdate.com (Dr. Jan Duffy)</managingEditor>
    <webMaster>DrDuffy@OpenHouseUpdate.com (Dr. Jan Duffy)</webMaster>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <category>Real Estate</category>
    <atom:link href="https://www.openhouseupdate.com/rss.xml" rel="self" type="application/rss+xml"/>
${feedItems
  .map(
    (item) => `    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <pubDate>${currentDate}</pubDate>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`
}

/**
 * Serve RSS as XML only. HTML chrome here was crawled as a homepage duplicate.
 */
export const onGet: RequestHandler = async (requestEvent) => {
  const xml = buildRssFeed()
  requestEvent.send(
    new Response(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'X-Robots-Tag': 'noindex, follow',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  )
}
