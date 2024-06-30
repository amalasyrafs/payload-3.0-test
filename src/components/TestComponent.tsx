'use client';

import { PaginatedDocs } from 'payload';
import { Achievement } from 'payload-types';
import { FC } from 'react';

interface TestComponent {
  data: PaginatedDocs<Achievement>;
}

const TestComponent: FC<TestComponent> = ({ data }) => {
  return (
    <div className="">
      {data.docs.map((doc) => (
        <p className="" key={doc.id}>
          {doc.title} <span className="font-bold text-red-500">{doc.status}</span>
        </p>
      ))}
    </div>
  );
};

export default TestComponent;
