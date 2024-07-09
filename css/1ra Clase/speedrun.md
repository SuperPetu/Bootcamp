intro: li:first-child

level 1: p:not(.foo)

level 2: li:nth-child(2n + 3)

level 3: div >*

level 4: span[data-item]

level 5: p~span

level 6: *:enabled

level 7: #one, #two, #five, #six, #nine

level 8: a+span

level 9: #foo > .foo

level 10: div > div > span + code:not(.foo)