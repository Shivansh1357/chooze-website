import { HeartIcon, PhoneIcon, SendIcon } from './icons';

export function PhoneMock() {
  return (
    <div className="relative flex justify-center">
      {/* floating friend avatars */}
      <div className="absolute -left-[14%] top-[2%] flex h-[54px] w-[54px] animate-[floaty_6.5s_ease-in-out_infinite] items-center justify-center rounded-[19px] bg-[linear-gradient(135deg,#C86DD7,#F4587A)] text-[15px] font-bold text-white opacity-90">
        AN
      </div>
      <div className="absolute -right-[10%] bottom-[8%] flex h-12 w-12 animate-[floaty_5.5s_ease-in-out_infinite_1s] items-center justify-center rounded-[17px] bg-[linear-gradient(135deg,#5BB98C,#2A9D8F)] text-[13px] font-bold text-white opacity-90">
        RO
      </div>

      {/* phone frame */}
      <div className="w-80 rounded-[40px] border border-border-strong bg-bg-phone p-3 shadow-[0_40px_90px_rgba(0,0,0,.6)]">
        <div className="flex h-[600px] flex-col overflow-hidden rounded-[30px] bg-bg-primary">
          {/* chat header */}
          <div className="flex items-center gap-2.5 border-b border-border-default px-4 pb-3 pt-4">
            <div className="bg-gradient-accent relative flex h-[38px] w-[38px] items-center justify-center rounded-[13px] text-[13px] font-bold text-white">
              PR
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-bg-primary bg-accent-green" />
            </div>
            <div>
              <div className="text-[14.5px] font-bold text-text-primary">Priya</div>
              <div className="text-[11px] text-accent-green">online</div>
            </div>
            <div className="ml-auto flex h-[34px] w-[34px] items-center justify-center rounded-full border border-accent-green/40 bg-accent-green/10 text-accent-green">
              <PhoneIcon />
            </div>
          </div>

          {/* messages */}
          <div className="flex flex-1 flex-col justify-end gap-2.5 px-3.5 py-4">
            <div className="max-w-[82%] self-start rounded-[18px] rounded-bl-[5px] bg-border-default px-3.5 py-[11px] text-[13.5px] leading-[1.45] text-text-primary">
              Interview at 3 today, right? Deep breath. You prepped all week. I
              was there for the 1am panic 😄
            </div>
            <div className="-mt-0.5 ml-1 inline-flex items-center gap-1 self-start rounded-full bg-accent-primary/10 px-[9px] py-[3px] text-[10.5px] font-bold text-accent-primary">
              <HeartIcon size={9} />
              she remembered
            </div>
            <div className="bg-gradient-accent max-w-[82%] self-end rounded-[18px] rounded-br-[5px] px-3.5 py-[11px] text-[13.5px] leading-[1.45] text-ink">
              okay I needed that. wish me luck 🤞
            </div>
            <div className="flex items-center gap-1 self-start rounded-[18px] rounded-bl-[5px] bg-border-default px-3.5 py-3">
              <span className="h-1.5 w-1.5 animate-[type-dot_1s_infinite] rounded-full bg-text-secondary" />
              <span className="h-1.5 w-1.5 animate-[type-dot_1s_infinite_.18s] rounded-full bg-text-secondary" />
              <span className="h-1.5 w-1.5 animate-[type-dot_1s_infinite_.36s] rounded-full bg-text-secondary" />
            </div>
          </div>

          {/* composer */}
          <div className="flex items-center gap-2 px-3.5 pb-[18px] pt-3">
            <div className="flex h-10 flex-1 items-center rounded-full border border-border-strong bg-bg-card px-3.5 text-[13px] text-text-tertiary">
              Message Priya…
            </div>
            <div className="bg-gradient-accent flex h-10 w-10 items-center justify-center rounded-full text-ink">
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
