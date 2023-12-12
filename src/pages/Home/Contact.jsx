import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
    return (
        <div className="py-20 px-4 md:px-6 lg:px-8" id="contact">
            <div className="flex max-w-5xl mx-auto flex-col md:flex-row justify-between gap-6">
            <div className="max-w-sm space-y-4">
                <SectionTitle
                    title={"Lets discuss about a project!"}
                    subTitle={'Contact Me'}
                ></SectionTitle>
                <p className="pt-6">I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just &apos;say hi&apos; to me.</p>
                <div className="pt-8 space-y-4">
                    <h4 className="text-xl font-medium flex items-center gap-4"><SiGmail className="text-primary"></SiGmail> myemail.abc20@gmail.com</h4>
                    <h4 className="text-xl font-medium flex items-center gap-4"><SiGithub className="text-primary"></SiGithub>www.github.com/Rahad-Ullah</h4>
                </div>
            </div>
            <div className="md:w-6/12">
                <div className=" flex-col lg:flex-row">
                    <div className="card shrink-0 w-full border border-base-200 bg-base-200">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered text-base" placeholder="Your message" rows={5}></textarea>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary text-base">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;