import { Hashtag } from 'src/hashtag/models/hashtag.entity';
import { PostHashtag } from 'src/hashtag/models/post-hashtag.entity';
import { Post, SnsType } from 'src/post/models/post.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

function randomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuwxyz0123456789';
  let code = '';
  for (let i = 0; i < 20; i++) {
    const randomIndex: number = Math.floor(Math.random() * chars.length);
    code += chars.charAt(randomIndex);
  }
  return code;
}

function randomType(): SnsType {
  const types = ['facebook', 'twitter', 'instagram', 'threads'];
  return types[Math.floor(Math.random() * types.length)] as SnsType;
}

const seedPostTitleAndContent = [
  {
    title: '황금 연못의 미지 탐험',
    content:
      '신비로운 황금 연못에 가려진 보물을 찾아 나서는 모험가들의 이야기입니다. 길고 어려운 여정을 통해 그들은 미지의 세계를 탐험합니다.',
  },
  ,
  {
    title: '요리 마스터가 되는 법',
    content:
      '다양한 요리 레시피와 기술을 익히며, 요리의 신비로운 세계를 탐험하는 여정을 시작해보세요. 먹음직스러운 요리의 향기가 여러분을 기다립니다.',
  },
  {
    title: '봄의 정원에서 피어나는 아름다움',
    content:
      '우아하게 피어나는 봄의 꽃들과 싱그러운 녹음술, 그리고 물결치는 나뭇가지들이 만드는 아름다운 풍경을 만나보세요.',
  },
  {
    title: '도시 랜드마크 탐험',
    content:
      '도시의 랜드마크와 역사적인 명소들을 탐험하며 그들이 지니는 이야기와 매력에 빠져보세요. 도시의 다양한 면모를 발견할 것입니다.',
  },
  {
    title: '해변 휴가의 아름다운 순간',
    content:
      '푸른 바다와 화사한 해변이 만들어내는 휴식의 순간을 즐겨보세요. 해수욕, 산책, 일몰 감상 등 다양한 액티비티가 기다립니다.',
  },
  {
    title: '자연 속에서의 평온한 시간',
    content:
      '차분한 자연 속에서 소소한 행복을 찾아보세요. 푸르른 숲속에서 바람소리와 새소리를 들으며 마음을 정화해보세요.',
  },
  {
    title: '예술과 문화의 세계',
    content:
      '다양한 문화와 예술의 현장을 방문하며 예술가들의 창의적인 작품과 열정을 느껴보세요. 감각적인 예술의 세계에 빠져들게 될 것입니다.',
  },
  {
    title: '음악의 매력에 빠져들다',
    content:
      '다양한 음악 장르와 아티스트들을 만나며 음악의 매력에 빠져보세요. 리듬과 멜로디가 당신의 마음을 사로잡을 것입니다.',
  },
  {
    title: '자기계발의 길을 걷다',
    content:
      '새로운 지식과 기술을 익히며 자신을 더 나게 만들어보세요. 자기계발의 길은 끊임없는 성장과 발전의 시작입니다.',
  },
  {
    title: '친구와 함께 하는 야외 활동',
    content:
      '친구들과 함께 실내보다는 야외에서 활동하며 즐거운 시간을 보내보세요. 신나는 활동들이 여러분을 기다립니다!',
  },
  {
    title: '작은 기쁨들의 모음',
    content: '일상 속에서 만나는 작은 기쁨들을 모아보았습니다. 소소하지만 소중한 순간들을 함께 나눠보세요.',
  },
  {
    title: '비밀의 정원에서의 아름다운 피어남',
    content:
      '비밀의 정원에서 놀라운 식물들이 피어나는 아름다운 순간을 만나보세요. 신비로운 식물들의 세계를 탐험합니다.',
  },
  {
    title: '옛 친구들과의 소중한 재회',
    content: '옛 친구들과의 소중한 재회의 순간을 공유합니다. 오랜 친구들과 함께한 추억이 담겨 있습니다.',
  },
  {
    title: '별빛 아래서의 감동적인 이야기',
    content: '밤하늘에 빛나는 별들과 함께하는 감동적인 이야기를 들려드립니다. 별들의 미소와 함께하는 순간입니다.',
  },
  {
    title: '포근한 공간에서의 휴식',
    content: '포근한 이불과 함께하는 힐링 타임을 즐겨보세요. 아늑한 공간에서 편안한 휴식을 취하는 여유로운 시간입니다.',
  },
  {
    title: '새로운 문화를 경험하는 여행',
    content: '다양한 문화와 관습을 경험하며 새로운 시야를 열어보세요. 다양성과 아름다움이 어우러진 여행입니다.',
  },
  {
    title: '사랑스러운 반려동물과의 시간',
    content: '사랑스러운 반려동물들과 함께하는 특별한 시간을 만끽해보세요. 동물들과의 소중한 순간들이 기다립니다.',
  },
  {
    title: '인생의 소중한 순간을 기록하기',
    content: '인생의 소중한 순간들을 사진으로 남겨보세요. 감동과 기억이 담긴 소중한 순간들을 기록합니다.',
  },
  {
    title: '책 속 세계로 떠나는 여행',
    content: '다양한 책 속 세계로 떠나보세요. 작가들의 상상력이 만들어낸 다양한 이야기들이 당신을 기다립니다.',
  },
  {
    title: '건강한 식습관의 중요성',
    content: '건강한 식습관을 통해 더 건강하게 살아보세요. 올바른 식단과 운동이 건강한 삶의 시작입니다.',
  },
  {
    title: '운동과 스포츠로 건강을 챙기다',
    content: '운동과 스포츠를 통해 건강을 챙기고 더 활기찬 삶을 살아보세요. 체력과 건강이 늘어나는 순간입니다.',
  },
  {
    title: '웃음소리가 가득한 행복한 날들',
    content: '웃음소리와 밝은 에너지로 가득한 행복한 순간들을 함께 나눠보세요. 즐거움과 행복이 넘치는 시간입니다.',
  },
  {
    title: '가족과 함께하는 소중한 시간',
    content: '가족들과 함께하는 특별한 시간을 공유합니다. 가족들과의 소중한 추억이 함께합니다.',
  },
  {
    title: '매일을 향한 감사의 마음을 가지다',
    content: '매일을 감사의 마음을 가지고 시작해보세요. 작은 것들에 감사하며 더 풍요로운 삶을 살아갑니다.',
  },
  {
    title: '친환경 라이프스타일의 아름다움',
    content:
      '친환경 라이프스타일로 더 아름다운 세계를 만나보세요. 자연과 함께하는 환경을 소중히 여기는 삶의 방식입니다.',
  },
  {
    title: '포근한 이불과 함께하는 힐링 타임',
    content: '포근한 이불과 함께하는 힐링 타임을 즐겨보세요. 편안한 공간에서 마음을 푸는 시간을 가져보세요.',
  },
  {
    title: '자연 속에서의 정적인 순간들',
    content: '자연 속에서의 정적인 순간들을 만나보세요. 자연의 소리와 풍경이 당신의 마음을 안정시킵니다.',
  },
  {
    title: '마음에 남는 인상적인 여행 기록',
    content:
      '인상적인 순간들을 기록하여 나만의 여행 다이어리를 만들어보세요. 여행의 아름다움을 기억에 남길 수 있습니다.',
  },
  {
    title: '작은 변화로 더 나은 삶을 살다',
    content: '작은 변화들이 더 나은 삶으로 이어질 수 있습니다. 당신의 일상에 조금씩 더 나은 습관을 추가해보세요.',
  },
];

const hashtagSeeds = [
  '모험',
  '탐험',
  '보물',
  '요리',
  '레시피',
  '요리마스터',
  '봄',
  '꽃',
  '정원',
  '도시',
  '랜드마크',
  '해변',
  '휴가',
  '바다',
  '자연',
  '평온',
  '푸른숲',
  '예술',
  '문화',
  '예술가',
  '음악',
  '매력',
  '리듬',
  '자기계발',
  '성장',
  '지식습득',
  '친구',
  '야외활동',
  '신나는시간',
  '작은기쁨',
  '소중한순간',
  '일상',
  '비밀의정원',
  '아름다운피어남',
  '식물탐험',
  '친구재회',
  '소중한추억',
  '옛친구들',
  '별빛이야기',
  '감동적인순간',
  '밤하늘',
  '포근한공간',
  '힐링타임',
  '휴식',
  '새로운문화',
  '다양성',
  '여행',
  '반려동물',
  '소중한시간',
  '동물과함께',
  '인생의순간',
  '기억',
  '사진기록',
  '책속세계',
  '이야기',
  '상상력',
  '건강한식습관',
  '올바른식단',
  '운동',
  '스포츠',
  '건강',
  '웃음소리',
  '행복한날들',
  '즐거움',
  '가족',
  '가족모임',
  '감사의마음',
  '풍요로운삶',
  '감사',
];

export class Hashtag1698821895733 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const query = queryRunner.manager;
    const newHashtag = hashtagSeeds.map(hashtag => query.create(Hashtag, { name: hashtag }));
    await query.save(Hashtag, newHashtag);

    const removeDuplicates: any = arr => {
      return [...new Set(arr)];
    };

    const setHashtags = [];
    for (let i = 0; i < 100; i++) {
      const { title, content } = seedPostTitleAndContent[
        Math.floor(Math.random() * seedPostTitleAndContent.length)
      ] ?? { title: 'test', content: 'test' };
      const randomNumber = Math.floor(Math.random() * 5);

      const post = query.create(Post, {
        contentId: randomCode(),
        type: randomType(),
        title,
        content,
        viewCount: Math.floor(Math.random() * 500),
        likeCount: Math.floor(Math.random() * 500),
        shareCount: Math.floor(Math.random() * 500),
      });

      const hashtags = [];
      const hashtagIds = [];
      for (let i = 0; i < randomNumber; i++) {
        let number = Math.floor(Math.random() * hashtagSeeds.length);
        if (number === hashtagSeeds.length) number--;
        hashtags.push(newHashtag[number].name);
        hashtagIds.push(newHashtag[number].id);
      }

      post.hashtags = removeDuplicates(hashtags).join(', ');
      let setIds = removeDuplicates(hashtagIds);

      if (!post.hashtags) {
        post.hashtags = newHashtag[1].name;
        setIds = newHashtag[1].id;
      }

      setHashtags.push(setIds);

      await query.save(Post, post);
    }

    let postIndex = 0;
    for (const hashtagIds of setHashtags) {
      ++postIndex;
      for (const hashtagId of hashtagIds) {
        if (postIndex > 100) break;
        await query.save(PostHashtag, { postId: postIndex, hashtagId });
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
