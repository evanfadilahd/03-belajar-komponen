import { getImageUrlV2 } from '@/utils/utils';

function MyAvatar({person, size}:{person:any, size:any}) {
  return (
    <section>
    <img
      className="avatar"
      src={getImageUrlV2(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
    </section>
  );
}

export default function MyProfile() {
  return (
    <MyAvatar
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP',
      }}
      size={40}
    />
  );
}