export function Skeleton() {
  const count = new Array(4).fill(null);
  return count.map((_, index) => <div className="w_80 h_24 mg-r_4 br_4 skeleton" key={index}></div>);
}
