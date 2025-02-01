import { Buttons, Info } from './styles';
import { IoMdCloudDownload } from "react-icons/io";
import { IoBag } from 'react-icons/io5';
import { useLangAtom } from '../../../hooks/useLangAtom';

export default function AboutMe(
    {
        aboutMe,
        myProjects
    }: any
    ) {
  const { lang } = useLangAtom()
  const EnglishCurriculum = "Ryan_Rodrigo_Costa_Curriculum_Vitae--English.pdf"
  const PortugueseCurriculum = "Ryan_Rodrigo_Costa_Currículo--Português.pdf"

  const currentCurriculum = lang === 'BR' ? PortugueseCurriculum : EnglishCurriculum

  return (
    <>
        <Info>
            <div className="container">
                <div>
                    <h2>
                        Full Stack Developer &
                    </h2>
                    <h2>
                        UI Designer
                    </h2>
                </div>
                <div>
                    <div>
                        <h1>
                            Ryan Costa
                        </h1>
                    </div>
                        <Buttons>
                            <a
                            href={
                                `/${currentCurriculum}`
                            }
                            target='_blank' className='button'>
                            {aboutMe} <IoMdCloudDownload   className="icon" size="15px"/>
                            </a>
                            <a href="#Portfolio" className='button button--featured'>
                            {myProjects} <IoBag  className="icon" size="15px"/>
                            </a>
                        </Buttons>
                </div>
            </div>
        </Info>

    </>
  );
}

