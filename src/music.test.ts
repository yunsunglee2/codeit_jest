import { Music, MusicPlayer } from "./music";

describe("music player 클래스 테스트", () => {
  let musicPlayer: MusicPlayer;
  const music: Music = {
    artist: "뉴진스",
    genre: "팝",
    releaseDate: "2023-01-01",
    title: "hype boy",
  };

  // BeforeEach, AfterEach

  beforeEach(() => {
    // 공유자원,중복 코드,인스턴스 등 초기화
    musicPlayer = new MusicPlayer([]);
  });

  it("음악을 추가하면 음악 리스트에 추가된다.", () => {
    // Arrange

    const output = [music];

    // Act 음악을 추가해봄
    const actual = musicPlayer.addMusic(music);

    // toBe가 아니라 toEqual을 사용해야 함
    // toBe는 객체의 주소값을 비교하기 때문에 실패함
    // toBe 원시값 비교
    // toEqual 객체,배열 비교
    // toBe, toEqual,toThrow => "matcher";
    expect(actual).toEqual(output);
    // expect(actual).toHaveLength(1);
    // expect(actual).not.toEqual([]);
    // expect(actual).not.toHaveLength(0);
    // expect(actual).toContain(newMusic);
  });

  it("음악을 넣고 getMusicList를 호출하면 음악 리스트를 반환한다.", () => {
    // Arrange

    musicPlayer.addMusic(music);
    const output = [music];

    // Act
    const actual = musicPlayer.getMusicList();

    // Assert
    expect(actual).toEqual(output);
  });

  it("addMusic을 호출하지 않고 getMusicList를 호출하면 빈 배열을 반환한다.", () => {
    const actual = musicPlayer.getMusicList();

    expect(actual).toEqual([]);
  });

  it("음악을 추가하고 아티스트로 검색을 할 수 있다", () => {
    // arrange
    musicPlayer.addMusic(music);

    // act
    const actual = musicPlayer.getMusicByArtist(music.artist);

    // assert
    expect(actual).toEqual(music);
  });

  it("음악을 추가하지 않고 아티스트로 검색을 할 수 없다", () => {
    // arrange

    // act
    const actual = musicPlayer.getMusicByArtist(music.artist);

    // assert
    expect(actual).toBeUndefined();
  });

  it("playMusic을 호출하면 현재 음악이 바뀐다.", () => {
    // arrange
    musicPlayer.playMusic(music);

    //act
    const actual = musicPlayer.getCurrentMusic();

    // assert
    expect(actual).toEqual(music);
  });

  it("음악을 재생하지 않고 현재음악을 호출하면 null이 반환된다.", () => {
    // arrange
    // 없음

    // act
    const acutal = musicPlayer.getCurrentMusic();

    // assert
    expect(acutal).toBeNull();
  });

  it("음악을 재생하면 현재 음악을 리턴한다.", () => {
    // arrange

    const actual = musicPlayer.playMusic(music);

    expect(actual).toEqual(music);
  });

  it("음악을 재생하다가 멈추면 null이 리턴됩니다.", () => {
    // arrange
    musicPlayer.playMusic(music);

    // act
    const actual = musicPlayer.stopMusic();

    // assert
    expect(actual).toBeNull();
  });

  it("음악이 재생중이 않을때 nextMusic을 호출하면 에러가 발생한다", () => {
    // arrange

    expect(() => musicPlayer.nextMusic()).toThrow();
  });

  it("nextMusic을 호출하면 다음 음악이 재생된다", () => {
    // arrange
    const firstMusic: Music = {
      artist: "뉴진스",
      genre: "팝",
      releaseDate: "2023-01-01",
      title: "첫번째 음악",
    };

    const secondMusic: Music = {
      artist: "뉴진스",
      genre: "팝",
      releaseDate: "2023-01-01",
      title: "두번째 음악",
    };

    const thirdMusic: Music = {
      artist: "뉴진스",
      genre: "팝",
      releaseDate: "2023-01-01",
      title: "세번째 음악",
    };
    // musicList 음악추가 ( 초기화 ) [firstMusic,secondMusic,thirdMusic]
    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);
    // 첫번째 음악 재생  currentMusic = firstMusic
    musicPlayer.playMusic(firstMusic);

    // act
    const actual = musicPlayer.nextMusic();

    // assert
    expect(actual).toEqual(secondMusic);
  });

  it("마지막 음악을 재생중일때 nextMusic을 호출하면 첫번째 음악이 재생된다.", () => {
    const firstMusic: Music = {
      artist: "뉴진스",
      genre: "팝",
      releaseDate: "2023-01-01",
      title: "첫번째 음악",
    };

    const secondMusic: Music = {
      artist: "뉴진스",
      genre: "팝",
      releaseDate: "2023-01-01",
      title: "두번째 음악",
    };

    const thirdMusic: Music = {
      artist: "뉴진스",
      genre: "팝",
      releaseDate: "2023-01-01",
      title: "세번째 음악",
    };

    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);

    musicPlayer.playMusic(thirdMusic);

    // --- 여기까지 arrange

    // act firstMusic이어야함
    const actual = musicPlayer.nextMusic();

    // assert
    expect(actual).toEqual(firstMusic);
  });
});
