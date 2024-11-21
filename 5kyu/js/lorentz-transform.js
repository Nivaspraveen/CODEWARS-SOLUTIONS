// NOTE :
// TL;DR at bottom

// Description :
// In this challenge, you'll create a function that takes the following three arguments:

// The electric-field vector E at some event in spacetime as measured in some inertial frame.
// The magnetic-field vector B at the same event as measured in the same frame.
// A velocity vector u.
// Each of these vectors will be given as an array of its Cartesian components (i.e : the electric field will be given as : 
// [Ex,Ey,Ez][Ex,Ey,Ez]). Each component will be a number.

// There's no need to worry about units while solving; assume that E and B share a unit, and also that we've set the speed of light (cc) to 1, which renders velocities unitless.

// Given valid parameters, your function will return the electric and magnetic fields as measured in a second inertial frame, whose velocity as measured in the first frame is u (the third argument). Each of these output-vectors should be an array of its Cartesian components . Return these vectors as the elements of an array, with the electric field coming first (i.e.

// [[Ex,Ey,Ez],[Bx,By,Bz]][[Ex,Ey,Ez],[Bx,By,Bz]]
// Assume that the Cartesian axes of the second frame are parallel to the corresponding axes of the first frame.

// To calculate the electric and magnetic fields in the second frame, use the following pair of vector equations, where 
// ×× means the cross product and 
// •• means the dot product:

// E′=cosh(φ)E+sinh(φ)(u^×B)−2sinh2(.5φ)(u^•E)u^E′=cosh(φ)E+sinh(φ)( u^ ×B)−2sinh 2 (.5φ)( u^ •E) u^ B′=cosh(φ)B−sinh(φ)(u^×E)−2sinh2(.5φ)(u^•B)u^B′=cosh(φ)B−sinh(φ)( u^ ×E)−2sinh 2 (.5φ)( u^ •B) u^
 
// Here, the primed fields on the left (E′E′ and B′B′) are the fields as measured in the second frame, and the unprimed fields on the right (E and B) are the fields as measured in the first frame.

// The quantity u^u^is the unit vector pointing in the same direction as u. Each of its Cartesian components is equal to the corresponding component of u divided by ∣∣u∣∣∣∣u∣∣, which is the magnitude of u (you can calculate ∣∣u∣∣∣∣u∣∣ by taking the square root of the sum of the squares of u's Cartesian components).

// Finally, the quantity φ
// φ that's fed to the hyperbolic functions is the relative rapidity of the frames, defined as 
// φ=artanh(∣∣u∣∣)φ=artanh(∣∣u∣∣) (i.e., the inverse hyperbolic tangent of the frames' relative speed).

// The parameters will be valid unless ∣∣u∣∣≥1∣∣u∣∣≥1 (because the relative speed of frames must be subluminal). If ∣∣u∣∣≥1∣∣u∣∣≥1, return null.

// TL;DR
// Given electric and magnetic field vector and a velocity vector Lorentz-Transform them

// Example :
// transformFields(
//   [-26.24, 555.1, 53.32],  // electric field's x, y, z
//   [1.030, 12.01, 287.8],  // magnetic field
//   [-1, 0, 0] // velocity ||u|| >= 1 so invalid 
// ) ==> null

// transformFields(
//   [-26.24, 555.1, 53.32],
//   [1.030, 12.01, 287.8],
//   [-.9999, 0, 0]  // (okay)
// ) ==> [
//   [ -26.24000000000001, 59601.485588666736, 2921.216067920808 ],
//   [ 1.0300000000000011, -2920.7541035114045, 59599.595444986444 ]
// ]

// transformFields(
//   [1.234, 0, 0],
//   [0, 1.234, 0],
//   [.5, .5, 0]
// ) ==> [
//   [ 1.4895697679841997, -0.25556976798419967, 0.8725697679841998 ],
//   [ -0.25556976798419967, 1.4895697679841997, 0.8725697679841998 ]
// ]
// Notes :
// For those intrested :

// One way to verify that the results are accurate is by comparing E•BE•B with E′•B′E′•B′. The dot product of the electric field and the magnetic field is a Lorentz scalar, which means that it's a quantity whose value all observers agree on, regardless of their relative motion. Another Lorentz scalar is ∣∣E∣∣2−∣∣B∣∣2∣∣E∣∣ 2−∣∣B∣∣ 2 .
// Light is characterized by electric and magnetic fields that share a magnitude and are mutually perpendicular (the Lorentz scalars mentioned in the previous paragraph guarantee that if these conditions are satisfied in one frame then they're satisfied in all frames). The third example fits the bill.
// In the second example, note that the x-components of the fields in the second frame don't seem to differ from those in the first frame. That's because 
// u
// u is parallel to the x-axis here, and electromagnetic field-components parallel to the boost direction transform to themselves.

// Topics: Physics, Arrays, Algebra, Geometry

const transformFields = (electric, magnetic, velocity) => {
    const { sqrt, cosh, sinh, atanh } = Math;
    const magnitude = (v) => sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
    const normalize = (v) => {
        const mag = magnitude(v);
        return [v[0] / mag, v[1] / mag, v[2] / mag];
    };
    const dotProduct = (v1, v2) => v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
    const crossProduct = (v1, v2) => [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ];
    const velocityMagnitude = magnitude(velocity);
    if (velocityMagnitude >= 1) return null; 
    const phi = atanh(velocityMagnitude);
    const velocityHat = normalize(velocity);
    const coshPhi = cosh(phi);
    const sinhPhi = sinh(phi);
    const sinhHalfPhiSquared = (sinh(phi / 2)) ** 2;
    const uCrossB = crossProduct(velocityHat, magnetic);
    const uDotE = dotProduct(velocityHat, electric);
    const electricPrime = [
        coshPhi * electric[0] + sinhPhi * uCrossB[0] - 2 * sinhHalfPhiSquared * uDotE * velocityHat[0],
        coshPhi * electric[1] + sinhPhi * uCrossB[1] - 2 * sinhHalfPhiSquared * uDotE * velocityHat[1],
        coshPhi * electric[2] + sinhPhi * uCrossB[2] - 2 * sinhHalfPhiSquared * uDotE * velocityHat[2]
    ];
    const uCrossE = crossProduct(velocityHat, electric);
    const uDotB = dotProduct(velocityHat, magnetic);
    const magneticPrime = [
        coshPhi * magnetic[0] - sinhPhi * uCrossE[0] - 2 * sinhHalfPhiSquared * uDotB * velocityHat[0],
        coshPhi * magnetic[1] - sinhPhi * uCrossE[1] - 2 * sinhHalfPhiSquared * uDotB * velocityHat[1],
        coshPhi * magnetic[2] - sinhPhi * uCrossE[2] - 2 * sinhHalfPhiSquared * uDotB * velocityHat[2]
    ];
    return [electricPrime, magneticPrime];
};