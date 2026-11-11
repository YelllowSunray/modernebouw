import { reviews, shortReviews } from "@/lib/content";

function Stars() {
  return (
    <span className="inline-flex gap-0.5" aria-label="5 van 5 sterren">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="star" aria-hidden>
          <path d="M10 1.6 12.4 7l5.9.5-4.5 3.8 1.4 5.7L10 14.2 4.8 17l1.4-5.7L1.7 7.5 7.6 7 10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

export function Reviews() {
  const [lead, ...rest] = reviews;

  return (
    <div>
      <figure className="frame p-7 md:p-10">
        <Stars />
        <blockquote className="mt-5 font-display text-3xl leading-tight md:text-4xl">
          “{lead.quote}”
        </blockquote>
        <figcaption className="mt-6 text-sm text-muted">
          {lead.name} · {lead.source} · {lead.when}
        </figcaption>
      </figure>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {rest.map((review) => (
          <figure key={review.quote} className="border border-line bg-surface p-5">
            <Stars />
            <blockquote className="mt-4 text-[0.98rem] leading-relaxed">“{review.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-muted">
              {review.source} · {review.when}
            </figcaption>
          </figure>
        ))}
      </div>
      <ul className="mt-5 flex flex-wrap gap-3">
        {shortReviews.map((review) => (
          <li key={review.name} className="border border-line px-4 py-3 text-sm" dir="auto">
            <Stars />
            <span className="mt-2 block font-semibold">{review.name}</span>
            {review.text ? <span className="text-muted">{review.text}</span> : null}
            <span className="block text-muted">{review.source}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
