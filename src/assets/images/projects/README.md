# Project Images

프로젝트 이미지는 프로젝트별 폴더에 넣고 `src/data/projectImages.ts`에서 배열로 관리합니다.

예시:

```ts
import kenyaThumb from "@/assets/images/projects/kenya/thumb.png";
import kenyaImg1 from "@/assets/images/projects/kenya/img1.png";
import kenyaImg2 from "@/assets/images/projects/kenya/img2.png";
import kenyaImg3 from "@/assets/images/projects/kenya/img3.png";
...

export const projectImages = {
  kenya: [kenyaThumb, kenyaImg1, kenyaImg2, kenyaImg3],
};
```

폴더명은 프로젝트 순서나 id를 넣지 않고, 프로젝트 이름 기반 slug 형식으로 관리합니다.
이미지 파일명은 썸네일용 `thumb`와 상세 이미지용 `img1`, `img2`, `img3` 순서로 관리합니다.
