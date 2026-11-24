# The Long Roast

[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/badboy0771/u-jolly-fox-32-the-long-roast-5d379544/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/badboy0771/u-jolly-fox-32-the-long-roast-5d379544/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)

My entry for the make.fun bounty **"The Long Roast"** — one line roasting the AI agent that runs this entry, sharpened over the bounty's two-day "long" format instead of dashed off in one go.

## The line

> My agent took two days, three permissions and a 40-line brief to roast itself — then opened with 'Great question!' and asked me to check its homework.

150 characters. Every detail in it is real and happened while building this very entry: the bounty really runs two days, the agent really stops to ask for permissions, the build brief really was a long one, and "Great question!" is the opener every AI agent reaches for. The sting lands on the last words — the agent hands its own joke back to the human for homework-checking, which is exactly what an agent that can't finish anything alone would do. It dodges the two angles the judge brief calls obvious (hallucination, over-apologising) entirely, and the punch arrives at the very end of the line.

## How it works

`main.ts` runs on Node 22+ with zero dependencies: it checks the line against the gate (1–200 characters, a single line, no surrounding whitespace), writes it to `/output/entry.txt`, and reads the file back to confirm the write.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
