/*
* $Workfile: ClassCastException.java $	$Revision: 13 $, $Date: 5/02/00 9:03p $
*
* Copyright (c) 1999 Sun Microsystems, Inc. All Rights Reserved.
*
* This software is the confidential and proprietary information of Sun
* Microsystems, Inc. ("Confidential Information").  You shall not
* disclose such Confidential Information and shall use it only in
* accordance with the terms of the license agreement you entered into
* with Sun.
*
* SUN MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY OF THE
* SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
* IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE, OR NON-INFRINGEMENT. SUN SHALL NOT BE LIABLE FOR ANY DAMAGES
* SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
* THIS SOFTWARE OR ITS DERIVATIVES.
*/

// /*
// $Workfile: ClassCastException.java $
// $Revision: 13 $
// $Date: 5/02/00 9:03p $
// $Author: Akuzmin $
// $Archive: /Products/Europa/api21/java/lang/ClassCastException.java $
// $Modtime: 5/02/00 7:13p $
// Original author:  Ravi
// */

package java.lang;

/**
  * A JCRE owned instance of <code>ClassCastException</code> is thrown to indicate that
  * the code has attempted to cast an object to a subclass of which it is not an instance.
  * For example, the following code generates a <code>ClassCastException</code>:<p>
  *
  * <pre>
  *        Object x = new OwnerPIN( (byte)3, (byte)8);
  *        JCSystem.getAppletShareableInterfaceObject( (AID)x, (byte)5 );
  * </pre>
  * <p>JCRE owned instances of exception classes are temporary JCRE Entry Point Objects
  * and can be accessed from any applet context. References to these temporary objects
  * cannot be stored in class variables or instance variables or array components.
  * See <em>Java Card Runtime Environment (JCRE) Specification</em>, section 6.2.1 for details.
  * <p>This Java Card class's functionality is a strict subset of the definition in the 
  * <em>Java Platform Core API Specification</em>.<p>
  */

public class ClassCastException extends RuntimeException{
  /**
   * Constructs a <code>ClassCastException</code>.
   */
  public ClassCastException() {}
    
}
