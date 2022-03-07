import React from 'react';
import fetch from 'node-fetch';
import { render, screen } from '@testing-library/react';
import YouTubeVideo from '../build/bundle';
import dotenv from 'dotenv';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

dotenv.config();

describe('check youTubeVideo on query "cat"', () => {
  let resultItem;
  beforeEach(async () => {
    let URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_KEY}&part=snippet&maxResults=1&q=cat`;

    const data = await fetch(URL, { method: 'GET' });
    const results = await data.json();

    resultItem = results.items[0];

    render(
      <YouTubeVideo
        videoId={resultItem.id.videoId}
        title={resultItem.snippet.title}
        description={resultItem.snippet.description}
      />
    );
  });

  test('check description', () => {
    const pWithDescription = screen.getByText(resultItem.snippet.description);
    expect(pWithDescription).toBeInTheDocument();
  });

  test('check iframe', () => {
    const iframe = screen.getByTitle('YouTube video player');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toBeEmptyDOMElement();
    expect(iframe).toHaveAttribute('src', `https://www.youtube.com/embed/${resultItem.id.videoId}`);
  });

  test('check link', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      `https://www.youtube.com/watch?v=${resultItem.id.videoId}`
    );
  });
});
