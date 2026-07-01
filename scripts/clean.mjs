// .next 빌드 캐시 삭제 (크로스 플랫폼)
// dev/build 산출물이 섞여 "Cannot find module './xxx.js'" 류 오류가 날 때 초기화용.
import { rmSync } from 'fs';
rmSync('.next', { recursive: true, force: true });
console.log('.next 캐시를 삭제했습니다.');
