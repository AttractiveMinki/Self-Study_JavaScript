# 목차 작성시 주의사항
# 1. 띄어쓰기 하지 않기
# 2. . 사용하지 않기

# 사용방법
# 1. 제목을 다 적는다. 제목 하나당 한 줄.
# 2. 파이썬을 실행시킨다.
# 3. 붙여넣는다.
# 4. 다 붙여넣고 나서 엔터를 두 번 누른다.
# 5. 생성된 목차를 원하는 곳에 붙여넣는다.

words = list()

while True:
    word = input()
    if word == '':
        break
    words.append(word)

for word in words:
    print('[%s](#%s)' % (word, word))
    print()