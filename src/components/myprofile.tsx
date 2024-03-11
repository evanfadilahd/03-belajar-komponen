import { getImageUrl } from '@/utils/utils';

export default function MyProfile() {
    return (
        <div>
            <section className="profile">
                <h2>Katsuko Saruhashi</h2>
                <img
                    className="avatar"
                    src={getImageUrl('YfeOqp2')}
                    alt="Katsuko Saruhashi"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profesi: </b> 
                        Ahli Geokimia
                    </li>
                    <li>
                        <b>Penghargaan: 2 </b> 
                        (Penghargaan Miyake Geokimia, Penghargaan Tanaka)
                    </li>
                    <li>
                        <b>Telah Menemukan: </b>
                        sebuah metode untuk mengukur karbon dioksida pada air laut
                    </li>
                </ul>
            </section>
        </div>
    );
}