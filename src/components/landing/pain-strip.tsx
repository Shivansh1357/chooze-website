const promises = [
  {
    pain: 'Other apps forget you at message 27.',
    promise: 'Chooze friends carry every conversation forward.',
  },
  {
    pain: 'Other apps hide the price till you’re hooked.',
    promise: 'Ours is on every profile. The meter never hides.',
  },
  {
    pain: 'Other apps interrupt your moment with ads.',
    promise: 'Never here. Not once. Not ever.',
  },
];

export function PainStrip() {
  return (
    <section className="border-y border-border-default bg-bg-surface">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 px-5 sm:px-8 md:grid-cols-3">
        {promises.map((item, i) => (
          <div
            key={item.pain}
            className={`py-7 md:px-7 ${i === 0 ? 'md:pl-0' : ''} ${
              i === promises.length - 1 ? 'md:pr-0' : ''
            } ${
              i < promises.length - 1
                ? 'border-b border-border-default md:border-b-0 md:border-r'
                : ''
            }`}
          >
            <div className="text-[15px] font-bold text-text-primary">
              {item.pain}
            </div>
            <div className="mt-1 text-sm text-text-tertiary">{item.promise}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
