---
title: NP 판별의 방법과 Knapsack Problem 
author: jimin
date: 2025-06-12 20:24:00 09:00
categories: [Computer Science, Memo, Algorithm]
tags: ["2025", "Computer Science", "Algorithm", "NP"]
---
NP 문제는 어떤 문제의 솔루션(해답)이 주어졌을 때 그 답이 맞는가를 polynomial time안에 확인할 수 있는 문제를 뜻한다. 어떤 문제가 NP 문제인지 아닌지를 판별하는 기준이 되기도 하는 정의이며 KnapSack Problem(KS Problem)을 예시로 어떤 문제가 NP문제인가를 확인하는 과정은 다음과 같다.

Knapsack problem이란 n개의 아이템의 무게와 profit 값 그리고 이들을 담을 Knapsack의 size가 주어졌을 때 profit이 최대가 되도록 knapsack을 가득 담는 방법을 찾는 문제이다. 기본적인 Knapsack 문제는 최댓값을 만들어내는 경우를 찾는 최적화 문제(Optimization problem)이지만 Yes 혹은 No로 답을 내리는 결정 문제(Decision problem) 버전 역시 존재해 이 둘을 나누어 NP 여부를 따져보아야 한다. 결정문제 버전은 profit이 특정 값 이상이 되도록 아이템을 담을 수 있는가를 찾는 문제이다. 결론부터 정리하면 Optimization problem 버전의 KS문제는 NP가 아닌 NP-Hard이며 Decision problem 버전의 KS 문제는 NP 문제이다. 

Optimization problem 버전 KS 문제가 NP문제인지를 판별하는 질문은, size가 W인 냅색을 채우는 아이템들의 집합 중 profit을 최대로 만드는 아이템들의 집합이 주어졌을 때, 해당 집합이 정말 profit을 최대로 만드는 아이템들의 집합이 맞느냐인데, 이를 알아내기 위해서는 가능한 집합의 모든 경우를 구하고, 이들 간의 비교를 하는 2^n 번의 연산을 필요로 한다. 즉 이는 polynomial time안에 이뤄질 수 없기에 NP 문제가 아니게 된다. NP 문제이기 위해서는 polynomial time안에 점검이 가능해야 한다.

Decision problem 버전 KS 문제가 NP인가를 판별하는 문제는 profit의 합이 100이상을 만드는 아이템 집합을 만들 수 있는가를 찾는 문제에 대한 답이 구해졌을 때, 이 답이 맞는 답인가이다. 이를 확인하기 위해서는, 해답 집합이 구해졌을 때, 아이템들의 프로핏 합을 구해보면 되므로 time complexity는 O(n)으로 나타낼 수 있다. polynomial time 안에 가능하므로, 이는 NP 문제임을 알 수 있다. 

이때, Decision problem 버전의 KS 문제의 해답은 Nondeterministic Algorithm(Nondeterministic Machine)로 구한다. 어떤 문제가 NP 문제인지 아닌지를 판별하는 데 필요한 알고리즘이다. 

Nondeterministic algorithm은, 현재의 물리적인 아키텍처인 폰노이만 구조 기반 아키텍처에서는 구현이 불가능한 알고리즘으로, deterministic하지 않은 알고리즘을 뜻한다. deterministic 알고리즘이란 모든 인풋에 대해 아웃풋이 동일한, 일정한 알고리즘을 말한다. 프로그래밍 언어론의 사례를 예로 들면 코드에서 if라는 토큰이 들어오면 이를 항상 변수도, 상수도 아닌 조건문의 시작을 뜻하는 예약어로 식별하는 것이다. 이렇지 않다는 것은 어떤 인풋이 들어왔을 때 아웃풋이 일정하지 않은 것이다. 실생활의 예시로, 갈림길 앞에서 진행할 길을 선택하는 경우를 들 수 있다. 어떤 길을 가다 갈림길이 나오면 각각의 길 중 하나로 일정하게 나아가기만 하는 게 아니라 특정 길을 갈 수도 다른 길을 갈 수도 있는 알고리즘이 바로 non-deterministic 알고리즘이다. 

이 알고리즘을 magic algorithm라고 부르기도 하는데, Time Complexity가 복잡한 문제를 병렬적으로 해결함으로써 어려운 문제를 Polynomial Time 안에 해결할 수 있기 때문이다. 트리의 각 level에서 아이템들을 하나씩 추가하느냐, 안하느냐의 형태로 트리 구조를 그려 정답을 찾아가는 알고리즘을 디자인했다고 가정할 때, 병렬 연산이 불가능하다면 backtracking 혹은 branch and bound 등으로 풀어야 하지만, 병렬 연산이 가능하다면 특정 아이템을 담는 경우와 담지 않는 겅우에 대한 가능성들을 동시에 처리를 할 수 있어 트리의 height 만큼의 연산이면 된다. 즉 O(n)을 Time Complexity로 갖도록, Polynomial Time 안에 해결할 수 있게 되는 것이다. 

폰노이만 아키텍처 구조로는 실현이 불가능한 알고리즘이지만 최근 활발히 개발되고 있는 양자컴퓨터로의 실험은 가능하기도 할까 궁금했지만 양자컴퓨터가 NP-Complete 문제를 다항 시간 안에 해결할 수 있다는 증거는 현재까지는 존재하지 않기에 NDTM의 역할을 수행할 수 있다고 볼 수는 없다고 한다. 이외에도 NP-Hard, NP-Complete, P 클래스 등 정리해 볼 내용이 많이 남아있지만 가장 흥미로우면서 기본이 되는 NP 문제 판별법에 대해 정리해보았다. 어떤 알고리즘 관련 논문, 서적을 읽고 이해할 때 바탕이 될 지식이 될 거라 생각한다. 