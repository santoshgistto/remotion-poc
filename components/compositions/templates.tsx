import TemplateOne from "../templates/template-1/templateOne"
import TemplateTwo from "../templates/template-2/templateTwo"
import TemplateThree from "../templates/template-3/templateTree"

const files = [
  {
    title: 'Template-1',
    source: 'https://images.unsplash.com/photo-1680771447988-94c040d9868b?w=687&q=80',
    template: TemplateOne,
    durationInFrames: 500,
    imageUrls: [
      "https://images.unsplash.com/photo-1680771447988-94c040d9868b?w=687&q=80",
      "https://images.unsplash.com/photo-1680951103843-a370c042fb03?w=687&q=80",
      "https://images.unsplash.com/photo-1680527639693-6bc8f2ef2222?w=687&q=80",
      "https://plus.unsplash.com/premium_photo-1677458719435-0ed8962ac400?w=687&q=80",
      "https://images.unsplash.com/photo-1681015162686-79e9cd18a0e6?w=687&q=80",
      "https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?w=687&q=80",
      "https://images.unsplash.com/photo-1680776192906-3d3d8fcccbdd?w=687&q=80",
      "https://plus.unsplash.com/premium_photo-1677456380311-91061b7694e2?w=687&q=80",
      "https://images.unsplash.com/photo-1679343316332-6b854e892a44?w=687&q=80",
    ],
    audio: "https://pub-4bf634469b5c482e9546855c0abd7a17.r2.dev/ES_Love%20Me%20Back.mp3"
  },
  {
    title: 'Template-2',
    source: 'https://images.unsplash.com/photo-1680250883722-0db8e0d386c2?fit=crop&w=774&q=80',
    template: TemplateTwo,
    durationInFrames: 450,
    imageUrls: [
      "https://images.unsplash.com/photo-1680250883722-0db8e0d386c2?fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1680521094897-7b161e2b31ee?fit=crop&w=830&q=80",
      "https://images.unsplash.com/photo-1680365073510-41e1729d9eb1?fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1679136895663-29d19036251a?fit=crop&w=654&q=80",
      "https://images.unsplash.com/photo-1611738027064-630a8f02ce0d?fit=crop&w=818&q=80",
      "https://images.unsplash.com/photo-1647382545485-91f8c6b7c85e?fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1680516199065-00f84fd2c0b1?fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1674238924120-a9d9a0425d28?fit=crop&w=1065&q=80",
      "https://images.unsplash.com/photo-1679403423791-91e190b4a9c2?fit=crop&w=774&q=80",
    ],
    audio: "https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Come%202gether/ES_Come%202gether.mp3"
  },
  {
    title: 'Template-3',
    source: 'https://images.unsplash.com/photo-1677050564212-633b21b6226f?fit=crop&w=778&q=80',
    template: TemplateThree,
    durationInFrames: 500,
    imageUrls: [
      "https://images.unsplash.com/photo-1679926398489-44a05ca69140?fit=crop&w=770&q=80",
      "https://images.unsplash.com/photo-1679918996045-08cbccd89ed1?ixlib=rb-4.0.3&fit=crop&w=770&q=80",
      "https://images.unsplash.com/photo-1680634218996-287b2985870e?fit=crop&w=770&q=80",
      "https://images.unsplash.com/photo-1679209971549-1227614b4254?auto=format&fit=crop&w=788&q=80",
      "https://images.unsplash.com/photo-1678526773417-3e08a00d745f?auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1677848103508-e443dfedf8d2?auto=format&fit=crop&w=770&q=80",
      "https://images.unsplash.com/photo-1676408364951-fe1541a47366?auto=format&fit=crop&w=784&q=80",
      "https://images.unsplash.com/photo-1673367885183-5ddb59563bd6?auto=format&fit=crop&w=790&q=80",
      "https://images.unsplash.com/photo-1677050564212-633b21b6226f?fit=crop&w=778&q=80"
    ],
    audio: "https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Come%202gether/ES_Come%202gether.mp3"
  }
  // More files...
]

export default function VideoTemplate({ selectTemplate }) {
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
            <button type="button" onClick={() => selectTemplate(file)} className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
        </li>
      ))}
    </ul>
  )
}