import React from 'react';

const newsItems = [
  {
    title: 'Company Launches New Product',
    description: 'We are excited to announce the launch of our new product.',
    date: '2023-10-01',
  },
  {
    title: 'Quarterly Earnings Report',
    description: 'Our quarterly earnings report shows significant growth.',
    date: '2023-09-15',
  },
  {
    title: 'Community Engagement Event',
    description: 'Join us for our upcoming community engagement event.',
    date: '2023-08-20',
  },
];

const News = () => {
  return (
    <div id='News' className="p-4">
      <h2 className="text-2xl font-bold mb-4">Company News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsItems.map((item, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-400">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
