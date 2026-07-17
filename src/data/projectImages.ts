import editorThumb from "@/assets/images/projects/2d-editor/thumb.png";
import editorImg1 from "@/assets/images/projects/2d-editor/img1.png";
import editorImg2 from "@/assets/images/projects/2d-editor/img2.png";
import kdisAttendanceKioskThumb from "@/assets/images/projects/kdis-attendance-kiosk/thumb.png";
import kdisAttendanceKioskImg1 from "@/assets/images/projects/kdis-attendance-kiosk/img1.png";
import kdisConnectThumb from "@/assets/images/projects/kdis-connect/thumb.png";
import kdisConnectImg1 from "@/assets/images/projects/kdis-connect/img1.png";
import kenyaThumb from "@/assets/images/projects/kenya/thumb.png";
import kenyaImg1 from "@/assets/images/projects/kenya/img1.png";
import kenyaImg2 from "@/assets/images/projects/kenya/img2.png";
import kenyaImg3 from "@/assets/images/projects/kenya/img3.png";
import microGridEmsThumb from "@/assets/images/projects/ls-sauter-micro-grid-ems/thumb.png";
import microGridEmsImg1 from "@/assets/images/projects/ls-sauter-micro-grid-ems/img1.png";
import microGridEmsImg2 from "@/assets/images/projects/ls-sauter-micro-grid-ems/img2.png";
import microGridEmsImg3 from "@/assets/images/projects/ls-sauter-micro-grid-ems/img3.png";
import saekimallThumb from "@/assets/images/projects/saekimall/thumb.png";
import saekimallImg1 from "@/assets/images/projects/saekimall/img1.png";
import saekimallImg2 from "@/assets/images/projects/saekimall/img2.png";
import saekimallImg3 from "@/assets/images/projects/saekimall/img3.png";

export const projectImages = {
  kenya: [kenyaThumb, kenyaImg1, kenyaImg2, kenyaImg3],
  kdisConnect: [kdisConnectThumb, kdisConnectImg1],
  mhpHomepage: [],
  saekimall: [saekimallThumb, saekimallImg1, saekimallImg2, saekimallImg3],
  lsSauterMicroGridEms: [microGridEmsThumb, microGridEmsImg1, microGridEmsImg2, microGridEmsImg3],
  kdisAttendanceKiosk: [kdisAttendanceKioskThumb, kdisAttendanceKioskImg1],
  twoDEditor: [editorThumb, editorImg1, editorImg2],
} satisfies Record<string, string[]>;
